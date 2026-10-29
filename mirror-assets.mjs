import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = new URL('https://rebot.tools/');
const out = path.resolve(import.meta.dirname);
const textExtensions = new Set(['.html', '.js', '.css', '.svg', '.json', '.webmanifest']);
const assetExtensions = 'js|css|wasm|svg|png|jpe?g|webp|gif|ico|woff2?|ttf|json';
const seen = new Set();
const failed = new Map();

async function filesIn(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await filesIn(full));
    else if (entry.isFile()) files.push(full);
  }
  return files;
}

function discover(text, localFile) {
  const results = new Set();
  const patterns = [
    new RegExp(`["'\\(]((?:/assets/|assets/|\\./)[A-Za-z0-9_./@-]+\\.(?:${assetExtensions})(?:\\?[^"')\\s]*)?)["'\\)]`, 'g'),
    new RegExp(`["']([A-Za-z0-9_@-]+-[A-Za-z0-9_-]{6,}\\.(?:${assetExtensions}))["']`, 'g'),
    /url\(["']?([^"')]+)["']?\)/g,
  ];
  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      let value = match[1];
      if (!value || /^(?:data:|https?:|#)/i.test(value)) continue;
      value = value.split('?')[0].split('#')[0];
      let relative;
      if (value.startsWith('/assets/')) relative = value.slice(1);
      else if (value.startsWith('assets/')) relative = value;
      else if (value.startsWith('./')) relative = path.posix.join(path.relative(out, path.dirname(localFile)).replaceAll('\\', '/'), value);
      else if (localFile.includes(`${path.sep}assets${path.sep}`)) relative = `assets/${value}`;
      else relative = value.replace(/^\//, '');
      relative = path.posix.normalize(relative).replace(/^\.\.\//g, '');
      if (relative && !relative.startsWith('.')) results.add(relative);
    }
  }
  return results;
}

async function download(relative) {
  if (seen.has(relative)) return false;
  seen.add(relative);
  const target = path.join(out, ...relative.split('/'));
  try {
    await fs.access(target);
    return false;
  } catch {}
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(new URL(relative, root), { redirect: 'follow' });
      if (!response.ok) {
        failed.set(relative, response.status);
        return false;
      }
      await fs.mkdir(path.dirname(target), { recursive: true });
      await fs.writeFile(target, Buffer.from(await response.arrayBuffer()));
      return true;
    } catch (error) {
      if (attempt === 3) failed.set(relative, error.cause?.code || 'network-error');
    }
  }
  return false;
}

let round = 0;
while (round++ < 12) {
  const files = await filesIn(out);
  const queue = new Set();
  for (const file of files) {
    if (!textExtensions.has(path.extname(file).toLowerCase())) continue;
    const text = await fs.readFile(file, 'utf8');
    for (const item of discover(text, file)) queue.add(item);
  }
  const pending = [...queue].filter(item => !seen.has(item));
  if (!pending.length) break;
  let added = 0;
  for (let i = 0; i < pending.length; i += 16) {
    const results = await Promise.all(pending.slice(i, i + 16).map(download));
    added += results.filter(Boolean).length;
  }
  console.log(`round ${round}: ${pending.length} checked, ${added} downloaded`);
  if (!added) break;
}

const finalFiles = await filesIn(out);
const bytes = (await Promise.all(finalFiles.map(file => fs.stat(file)))).reduce((sum, item) => sum + item.size, 0);
console.log(JSON.stringify({ files: finalFiles.length, bytes, failed: failed.size }));
if (failed.size) console.log([...failed.entries()].map(([file, status]) => `${status} ${file}`).join('\n'));

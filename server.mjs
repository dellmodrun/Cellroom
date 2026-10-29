import http from 'node:http';
import { createReadStream, promises as fs } from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const root = path.resolve(import.meta.dirname);
const port = Number(process.env.PORT || 4178);
const host = '127.0.0.1';
const mime = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.gif': 'image/gif', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.wasm': 'application/wasm',
};

async function resolveRequest(urlPath) {
  let pathname;
  try { pathname = decodeURIComponent(new URL(urlPath, 'http://local').pathname); }
  catch { return null; }
  const requested = path.resolve(root, `.${pathname}`);
  if (requested !== root && !requested.startsWith(`${root}${path.sep}`)) return null;
  for (const candidate of [requested, path.join(requested, 'index.html')]) {
    try { if ((await fs.stat(candidate)).isFile()) return candidate; } catch {}
  }
  if (!path.extname(pathname)) return path.join(root, 'index.html');
  return null;
}

const server = http.createServer(async (request, response) => {
  const file = await resolveRequest(request.url || '/');
  if (!file) { response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }); response.end('Not found'); return; }
  response.writeHead(200, {
    'content-type': mime[path.extname(file).toLowerCase()] || 'application/octet-stream',
    'cache-control': 'no-cache',
    'x-content-type-options': 'nosniff',
  });
  if (request.method === 'HEAD') { response.end(); return; }
  createReadStream(file).on('error', () => response.destroy()).pipe(response);
});

server.listen(port, host, () => {
  const url = `http://${host}:${port}`;
  console.log(`Cellroom local frontend: ${url}`);
  console.log('Press Ctrl+C to stop.');
  if (!process.argv.includes('--no-open') && process.platform === 'win32') {
    const child = spawn('cmd', ['/c', 'start', '', url], { detached: true, stdio: 'ignore', windowsHide: true });
    child.unref();
  }
});


# reBot local frontend

This folder contains a local static mirror of the public frontend at `https://rebot.tools/`.

## Start

Double-click `启动本地网站.bat`, or run:

```powershell
node server.mjs
```

Then open `http://127.0.0.1:4178`.

The visual frontend, animations, dialogs and workspace views are mirrored locally. Authentication, AI containers, billing and other server-side operations still depend on the original service and are not reproduced by this static copy.

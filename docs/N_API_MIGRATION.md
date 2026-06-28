# N-API migration plan

## Current addon

- 3 targets: `lwip_decoder`, `lwip_encoder`, `lwip_image`.
- ~30 addon C++ files.
- Vendored jpeg/png/gif libs.
- Heavy NAN API usage: `AsyncWorker`, `Callback`, `HandleScope`, `ThrowError`, `Export`, `NewBuffer`, `New<T>`, `NODE_MODULE`.
- Node 26 was dropped from the CI matrix because nan doesn't build on it.

## Migration target

- Move to N-API / `node-addon-api`.
- Use `Napi::ObjectWrap`, `Napi::AsyncWorker`, `Napi::Buffer`, and `Napi::Function`.

## Effort

- HARD — multiple addon entrypoints, async workers, `LwipImage` wrapper, and buffer-heavy code.

## Benefits

- ABI stability across Node versions.
- No nan dependency.
- Node 26+ support.

## Estimate

- 1-2 weeks of dedicated effort.

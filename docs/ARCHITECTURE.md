# Architecture

`lwip` is a single-package native addon project.

## Layout
- `index.js` is the JS entry point.
- `lib/` contains JS helpers (`Batch.js`, `Image.js`, `obtain.js`, `util.js`, `defs.js`).
- `src/` contains the native/C++ implementation split by `decoder/`, `encoder/`, `image/`, `lib/`, `shared/`, and `win/`.
- `examples/` holds runnable sample scripts.
- `tests/` contains the Mocha suite.
- `binding.gyp` and the `install`/`build:native` scripts drive node-gyp builds.

## Dependency shape
- The JS layer wraps the native addon through `bindings`.
- `nan` bridges JS to the addon implementation.

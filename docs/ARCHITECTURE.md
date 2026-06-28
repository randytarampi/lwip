# Architecture

`lwip` is a single-package native addon project.

## Layout
- `index.js` is the JS entry point; it re-exports `lib/obtain.js`.
- `lib/` contains the JS wrappers (`Batch.js`, `Image.js`, `obtain.js`, `util.js`, `defs.js`).
- `src/decoder`, `src/encoder`, and `src/image` hold the native addon code paths.
- `src/lib` vendors the jpeg/png/gif/zlib sources, with `src/shared` and `src/win` for cross-platform helpers.
- `tests/` holds the ~450-spec Mocha suite plus fixtures and golden images.
- `binding.gyp` defines the `lwip_decoder`, `lwip_encoder`, and `lwip_image` addon targets that `node-gyp` builds.

## Dependency shape
- The JS layer wraps the native addon through `bindings`.
- `nan` bridges JS to the addon implementation.

## CI/CD Pipeline
- `.github/workflows/ci.yml` runs tests on PRs on Node 24.
- `.github/workflows/release.yml` does master-branch semantic-release with OIDC trusted publishing.

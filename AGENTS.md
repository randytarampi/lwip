# AGENTS.md

`lwip` is the Node.js native image-processing addon. It ships JS wrappers plus a nan/node-gyp C++ addon that still compiles on Node 24, even if the stack is old and cranky.

Canonical commands:
- `yarn test`
- `yarn lint`
- `yarn lint:cpp`
- `yarn build:native`
- `yarn clean`
- `yarn cover`

Notes:
- Native builds run `node-gyp rebuild`.
- `binding.gyp` defines three addon targets: `lwip_decoder`, `lwip_encoder`, and `lwip_image`.
- Tests need the native addon to load; if `build:native` has not succeeded, they are not meaningful.

## How to add/enrich/update guidance in this repo
- Keep this file short; put structure and policy details in `docs/*`.
- Update `docs/ARCHITECTURE.md` when the JS/native split or build flow changes.
- Update `docs/CONVENTIONS.md` when the supported Node, lint, or release rules change.
- Keep `docs/LIMITATIONS.md` for unresolved native-stack issues only.

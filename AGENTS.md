# AGENTS.md

`lwip` is the native image-processing addon package. It combines JS wrappers, a C++ addon, and example/test coverage.

Canonical commands:
- `yarn test`
- `yarn lint`
- `yarn cover`
- `yarn build:native`

Details:
- [Architecture](docs/ARCHITECTURE.md)
- [Conventions](docs/CONVENTIONS.md)
- [Limitations](docs/LIMITATIONS.md)

## How to add/enrich/update guidance in this repo
- Keep this file short; put structure and policy details in `docs/*`.
- Update `ARCHITECTURE.md` when the JS/native split or build flow changes.
- Update `CONVENTIONS.md` when the supported Node, lint, or release rules change.
- Keep `LIMITATIONS.md` for unresolved native-stack issues only.

# Conventions

- Use Yarn 4 for installs and scripts.
- Node 24 is the baseline.
- The package is ESM (`"type": "module"`) even though the addon is legacy native code.
- ESLint uses flat config.
- Follow conventional commits and semantic-release-friendly history.
- When native code changes, run the build and tests together so the JS/native contract stays aligned.

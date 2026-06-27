# Conventions

- Use Yarn 4 for installs and scripts.
- Node 24 is the baseline.
- The package is ESM (`"type": "module"`) even though the addon is legacy native code.
- ESLint uses flat config.
- Follow conventional commits and semantic-release-friendly history.
- When native code changes, run the build and tests together so the JS/native contract stays aligned.

## Voice and Style

We use conventional commits with personality. Be practical and candid. Explain WHY, not just WHAT.

Good examples from this repo's history:
- `chore(package): Upgrade packages for 2020-11-22.`
- `fix: webpack-node-externals expects an allowlist, not a whitelist. ✊🏿`

Rules:
- Subject line: `type(scope): brief description.` — sentence case, period optional
- Body: explain the why, not just the what. Be yourself.
- Emojis are fine when they add personality, not as decoration
- Don't be corporate. Don't be robotic.
- PR descriptions: thorough but relaxed. Show your work.

const js = require('@eslint/js');
const importPlugin = require('eslint-plugin-import');
const globals = require('globals');

module.exports = [
    {
        ignores: [
            'node_modules/**',
            'build/**',
            'cmake-build-debug/**',
            'coverage/**',
            '.nyc_output/**',
            '.idea/**'
        ]
    },
    js.configs.recommended,
    {
        files: ['**/*.js'],
        plugins: {
            import: importPlugin
        },
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'commonjs',
            globals: {
                ...globals.node,
                ...globals.mocha,
                Promise: 'readonly'
            }
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js']
                }
            }
        },
        rules: {
            'no-useless-escape': 'warn',
            eqeqeq: 'error',
            semi: 'error',
            quotes: ['error', 'single'],
            'import/named': 'error',
            'import/export': 'error',
            'import/no-mutable-exports': 'error',
            'import/first': 'error',
            'import/no-duplicates': 'error',
            'import/no-unresolved': 'error',
            'import/default': 'error',
            'no-global-assign': 'error',
            'no-buffer-constructor': 'error'
        }
    }
];

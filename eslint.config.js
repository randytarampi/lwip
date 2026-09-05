import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
    {
        ignores: [
            'node_modules/**',
            'build/**',
            'cmake-build-debug/**',
            'coverage/**',
            '.nyc_output/**',
            '.idea/**',
            'tests/.mocharc.cjs'
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
            sourceType: 'module',
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

import js from '@eslint/js'
import globals from 'globals'
import { defineConfig, globalIgnores } from 'eslint/config'

import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'

import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'

export default defineConfig([
  globalIgnores(['node_modules/**', 'dist/**', '.idea/**', '.vscode/**']),
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      react: reactPlugin,
    },
    extends: [
      js.configs.recommended,
      jsxA11yPlugin.flatConfigs.recommended,
      prettierPluginRecommended,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'no-console': 'warn',
      eqeqeq: 'warn',
      curly: 'warn',

      'react/jsx-uses-vars': 'error',
    },
  },
])

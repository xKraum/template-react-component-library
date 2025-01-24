// eslint.config.js
// https://medium.com/@1608naman/a-flat-attempt-at-the-eslint-flat-config-393005212d67
// https://perfectionist.dev/guide/getting-started
import { fileURLToPath } from 'url';
import perfectionist from 'eslint-plugin-perfectionist';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import tsParser from '@typescript-eslint/parser';

// Resolve __dirname in ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//   baseDirectory: __dirname, // Optional, default to process.cwd()
// });

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // Optional, default to process.cwd()
});

export default [
  // // Migrate env using FlatCompat
  // ...compat.env({
  //   browser: true,
  //   node: true,
  // }),

  {
    files: ['src/**/*.{js,mjs,cjs,jsx,ts,tsx}', 'eslint.config.js'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      // globals: {
      //   ...globals.browser,
      //   ...globals.node,
      //   ...globals.serviceworker,
      // },
    },

    plugins: {
      // '@typescript-eslint': typescript,
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': 2,
    },
  },
];

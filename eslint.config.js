import js from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
// https://medium.com/@1608naman/a-flat-attempt-at-the-eslint-flat-config-393005212d67
// https://perfectionist.dev/guide/getting-started

export default [
  js.configs.recommended, // Extends ESLint recommended rules.
  {
    files: [
      'src/**/*.{js,mjs,cjs,jsx,ts,tsx}', // NOTE: Double asterisk (**) matches files in the directory and subdirectories.
      'eslint.config.js',
      'setupTests.ts',
    ],

    // PARSER: TypeScript & JSX support using the nearest tsconfig.json.
    // https://eslint.org/docs/latest/use/configure/parser
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true, // Source file being linted should use type information based on the nearest tsconfig.json.
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },

      // GLOBAL VARIABLES: Groups of variables globally available during runtime, like `console` in the browser.
      // https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
    },

    // PLUGINS: Set of rules that can be individually applied in the `rules` object.
    // https://eslint.org/docs/latest/use/configure/plugins
    plugins: {
      perfectionist,
    },

    // RULES: Defines the specific linting rules, can be included rules added in the `plugins` object.
    // https://eslint.org/docs/latest/use/core-concepts/#rules
    rules: {
      // NOTE: 0 = Off | 1 = Warn | 2 = Error
      'perfectionist/sort-imports': 2,
    },
  },
];

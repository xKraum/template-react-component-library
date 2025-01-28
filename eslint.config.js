import eslint from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import jsxA11y from 'eslint-plugin-jsx-a11y';
// https://medium.com/@1608naman/a-flat-attempt-at-the-eslint-flat-config-393005212d67
// https://perfectionist.dev/guide/getting-started

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended, // Extends recommended rules for React.
  react.configs.flat['jsx-runtime'], // Use for React 17+ JSX transform. By for example disabling the rule recommended react-in-jsx-scope.
  reactHooks.configs['recommended-latest'], // TODO: Update to 5.2.0 release // TODO: Planned to change to from 'recommended-latest' to 'recommended' in 6.0.0.
  jsxA11y.flatConfigs.recommended,
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

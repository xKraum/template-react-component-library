import perfectionist from 'eslint-plugin-perfectionist';
import tsParser from '@typescript-eslint/parser';
// eslint.config.js
// https://medium.com/@1608naman/a-flat-attempt-at-the-eslint-flat-config-393005212d67
// https://perfectionist.dev/guide/getting-started

export default [
  {
    // files: ['src/**/*.{js,mjs,cjs,jsx,ts,tsx}', 'eslint.config.js'],

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

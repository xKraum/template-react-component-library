module.exports = {
  // Stop ESLint from searching for configuration in parent folders
  root: true,
  env: {
    jest: true, // Enable Jest for testing environment
    browser: true, // Enable browser environment
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
  extends: [
    // NOTE: Extends applies a group of rules already defined by the different plugins.
    // NOTE: If a plugin starts with "eslint-config-" that part of the name can be omitted.
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // Provides a set of rules that can be individually applied on the `rules` object.
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react',
    'typescript-sort-keys',
    'sort-destructure-keys',
  ],
  rules: {
    // NOTE: 0 = Off | 1 = Warn | 2 = Error

    // React 18 JSX transform will automatically import the necessary runtime functions, these rules are no longer necessary.
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,

    // Enforces arrow functions for Components.
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // Enforces using JSX only in *.tsx files.
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],

    // Enforces non-required props to define their default values in the function arguments/parameters.
    'react/require-default-props': [
      2,
      {
        functions: 'defaultArguments',
      },
    ],

    // Enforces using htmlFor in a label for the associated control/input.
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'htmlFor',
      },
    ],

    // Allows spreading in JSX components and forbid on everything else (HTML tags, etc.)
    'react/jsx-props-no-spreading': [
      2,
      {
        custom: 'ignore',
      },
    ],

    // Enforces not using file extensions for .ts/.tsx files in import statements.
    'import/extensions': [2, { ts: 'never', tsx: 'never' }],

    // Uses the TypeScript no-shadow rule instead of the base one.
    // Disallows a local variable to have the same name as a variable in its containing scope.
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,

    // Uses the TypeScript no-unused-vars rule instead of the base one.
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        // Allow function arguments that start with _
        argsIgnorePattern: '^_',
        // Allow catch arguments that start with _
        caughtErrorsIgnorePattern: '^_',
        // Allow sibling variables of ...rest in destructure objects.
        ignoreRestSiblings: true,
        // Allow variables that start with _
        varsIgnorePattern: '^_',
      },
    ],

    // Allows dangling underscores in names so no-unused-vars can be used.
    'no-underscore-dangle': 0,

    // Enforces the use of curly {} in block statements (if, else, for, while...).
    curly: [2, 'all'],

    // Disallows the use of undeclared variables.
    'no-undef': 2,

    // Uses the TypeScript no-use-before-define rule instead of the base one.
    // Disallows the use of variables before they are defined.
    '@typescript-eslint/no-use-before-define': 2,
    'no-use-before-define': 0,

    // Enforces keys to be in case insensitive order ({ a, B, c }).
    'sort-destructure-keys/sort-destructure-keys': [
      2,
      {
        caseSensitive: false,
      },
    ],

    // Enforces object keys to be sorted in case insensitive order (const obj = {a: 1, B: 2, c: 3};).
    'sort-keys': [
      2,
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],

    // Enforces the way of sorting the component props.
    // Alphabetical case insensitive order, React reserved props before, callbacks after.
    // Example: <Component dangerouslySetInnerHTML={...} firstName="John" lastName="Doe" onClick={...} />
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],

    // Enforces the import order to follow leaving a new line between groups.
    // 1- Builtin, External: "import fs from 'fs';", "import _ from 'lodash';".
    // 2- Internal: "import foo from 'src/foo';".
    // 3- Type: "import type { Foo } from 'foo';".
    'import/order': [
      2,
      {
        groups: [['builtin', 'external'], ['internal'], ['type']],
        'newlines-between': 'always',
      },
    ],

    // Enforces the naming conventions for some cases across the code.
    // Variables must be in camelCase or UPPER_CASE. Boolean variables must have a verb prefixed. (Normal variables).
    // Function variables must be in camelCase or PascalCase (used for creating Functions and Components).
    // Types like (class, enum, interface, typeAlias, typeParameter) must be in PascalCase. Interfaces must be prefixed with 'I'.
    // Functions declared using the 'function' keyword must be in camelCase.
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
      {
        selector: 'function',
        format: ['camelCase'],
      },
    ],

    // Enforces no braces where they can be omitted.
    'arrow-body-style': [2, 'as-needed'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

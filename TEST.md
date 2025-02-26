# React Component Library Template

This project is an up-to-date template, as of 2025, for building a React Component Library.

It showcases all the configuration for the development using a `<Button />` and `<Input />` components as a placeholder.

This document includes a comprehensible documentation that explains the purpose of all scripts and configuration files, as well as the reasoning behind the structure.

---

## 📋 Table of Contents[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-table-of-contents)

- [🌐 Tech Stack](#-tech-stack)
- [📦 Folder Structure](#-folder-structure)
- [📜 Project Scripts](#-project-scripts)
- [📋 Pre-requisites](#-pre-requisites)
- [🔧 Project Configuration](#-project-configuration)
  - [Configure ESLint](#configure-eslint-)
  - [Configure Prettier](#configure-prettier-)
  - [Configure TypeScript](#configure-typescript-)
  - [Configure Vite & DTS](#configure-vite--dts-)
  - [Configure Vitest](#configure-vitest-)
  - [Configure Storybook](#configure-storybook-)
  - [Configure Git Hooks](#configure-git-hooks-)
  - [GitHub Actions for CI/CD](#github-actions-for-cicd-)
- [✍ Create a Component](#-create-a-component)
  - [Create the Component](#create-the-component-)
  - [Add Tests to the Component](#add-tests-to-the-component-)
  - [Add the Component to the Storybook](#add-the-component-to-the-storybook-)
- [🚀 Publish Changes](#-publish-changes)
  - [Build the Library](#build-the-library-)
  - [Generate Release and Deploy](#generate-release-and-deploy-)

---

## 🌐 Tech Stack[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-tech-stack)

| Category                   | Technologies                                                                                                                                                                                                                                                    |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Core**                   | ![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)                                         |
| **Build**                  | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![DTS](https://img.shields.io/badge/Vite_DTS-646CFF?style=for-the-badge)                                                                                        |
| **Code Quality**           | ![ESLint](https://img.shields.io/badge/ESLint_9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)                                             |
| **Testing**                | ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white) ![React Testing Library](https://img.shields.io/badge/React_Testing_Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)               |
| **CI/CD**                  | ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white) ![Semantic Release](https://img.shields.io/badge/Semantic_Release-494949?style=for-the-badge&logo=semanticrelease&logoColor=white) |
| **Git Hooks**              | ![LeftHook](https://img.shields.io/badge/LeftHook-FF1E1E?style=for-the-badge&logo=lefthook&logoColor=white)                                                                                                                                                     |
| **Design & Documentation** | ![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)                                                                                                                                                  |

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 📦 Folder Structure[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-folder-structure)

```
└── 📁.github
    └── 📁workflows
        ├── cd.yml
        └── ci.yml
└── 📁.storybook
    ├── main.ts
    └── preview.ts
└── 📁src
    ├── 📁components
    │   ├── 📁Button
    │   │   ├── 📁__docs__
    │   │   │   ├── Button.mdx
    │   │   │   └── Button.stories.tsx
    │   │   ├── 📁__test__
    │   │   │   └── Button.test.tsx
    │   │   ├── Button.css
    │   │   └── Button.tsx
    │   ├── 📁Input
    │   │   ├── 📁__docs__
    │   │   │   ├── Input.mdx
    │   │   │   └── Input.stories.tsx
    │   │   ├── 📁__test__
    │   │   │   └── Input.test.tsx
    │   │   ├── Input.css
    │   │   └── Input.tsx
    │   └── index.ts
    └── index.ts
.gitignore
.prettierrc.mjs
eslint.config.js
eslint.constants.mjs
lefthook.yml
package-lock.json
package.json
README.md
release.config.mjs
setupTests.ts
tsconfig.build.json
tsconfig.json
vite.config.ts
```

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 📜 Project Scripts[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-project-scripts)

<details>
<summary>Show available project scripts</summary>

### 🔨 Build library: `build`

```
tsc -p tsconfig.build.json && vite build
```

### 🖌️ Run Prettier: `format`

```
prettier --write --parser typescript '**/*.{ts,tsx}'
```

### 🔍 Run ESLint: `lint`

```
eslint --fix
```

### 🔍 Run ESLint without automatic fixes: `lint:no-fix`

```
eslint
```

### 🧪 Run tests: `test`

```
vitest run
```

### 🧪 Run tests and watch to rerun on code changes: `test:watch`

```
vitest
```

### 🧪 Run tests with a server GUI: `test:gui`

```
vitest --ui
```

### 📖 Run Storybook server: `storybook`

```
storybook dev -p 6006
```

### 📖 Build Storybook `storybook:build`

```
storybook build
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 📋 Pre-requisites[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-pre-requisites)

- VS Code
- Node v22
- Git
- TypeScript knowledge
- React knowledge

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 🔧 Project Configuration[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-project-configuration)

> [!NOTE]
>
> - **ESLint** and **Prettier** are **highly recommended** tools for ensuring code quality and consistent formatting.
> - **TypeScript**, **Vite**, and **DTS** are **mandatory** configurations for building and running the project.
> - **Vitest** and **Storybook** are optional tools for testing components and documentation.
> - **Lefthook** and **GitHub Actions** are optional but **recommended** tools for automating jobs with Git hooks and CI/CD pipelines.

### Configure ESLint <img src="https://cdn.simpleicons.org/eslint/000/4B32C3" alt="ESLint" align=left width=24>

> [!IMPORTANT]
>
> The project is configured with ESLint 9, which introduces a new configuration format called _flat config_.
>
> In the flat config format, the configuration is more modular and declarative, allowing for a clearer and more concise setup.

<details>
<summary>Show details</summary>

The files are self-explanatory, with detailed comments explaining their purpose and functionality.

The `eslint.config.js` is the default configuration file for ESLint, while there is also a `eslint.constants.mjs` file with common objects and configurations for shared use.

#### `eslint.config.js`:

```js
/* eslint-disable perfectionist/sort-objects */
import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import {
  booleanPrefixes,
  perfectionistSortObjects,
  perfectionistSortTypes,
} from './eslint.constants.mjs';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  // FILES: A config object only applies to a file if the filename matches a pattern in files (or if there is no files key, in which case it will match all files).
  // RULES: The severity levels are off (0), warning (1), and error (2).

  // GLOBAL IGNORES: Added in a separate object to apply globally and be able to match directories. Only global `ignores` can match directories.
  {
    ignores: ['dist', 'build', 'storybook-static', '!.storybook'], // Ignore some directories but prevent ignoring `.storybook`.
  },

  // SETTINGS: Detect React version automatically for `eslint-plugin-react` rules.
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // EXTENDS: Extends specific set of rules (like recommended) from the different plugins.
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'], // Disables some React recommended rules like `react-in-jsx-scope` not needed in React 17+.
  reactHooks.configs['recommended-latest'], // TODO: Update to 5.2.0 release // NOTE: Planned to change to from 'recommended-latest' to 'recommended' in 6.0.0.
  jsxA11y.flatConfigs.recommended,
  ...storybook.configs['flat/recommended'],
  prettierRecommended,

  // TYPESCRIPT: Specific rules for TypeScript files in separate object to prevent parser conflicts with JS files.
  {
    ignores: ['*.{js,mjs,jsx}'], // Ignore JavaScript files.
    // PARSER: TypeScript & JSX support using the nearest tsconfig.json.
    // More details: https://eslint.org/docs/latest/use/configure/parser
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true, // Linted files will use the type information of the nearest `tsconfig.json`.
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },

      // GLOBAL VARIABLES: Groups of variables globally available during runtime, like `console` in the browser.
      // More details: https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
    },

    rules: {
      // [TYPESCRIPT RULES]
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

      // Uses the TypeScript no-shadow rule instead of the base one.
      // Disallows a local variable to have the same name as a variable in its containing scope.
      'no-shadow': 0,
      '@typescript-eslint/no-shadow': 2,

      // Uses the TypeScript no-use-before-define rule instead of the base one.
      // Disallows the use of variables before they are defined.
      '@typescript-eslint/no-use-before-define': 2,
      'no-use-before-define': 0,

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
          prefix: booleanPrefixes,
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
    },
  },

  {
    // PLUGINS: Declare plugins here to make their rules available in the `rules` object.
    // More details: https://eslint.org/docs/latest/use/configure/plugins
    plugins: {
      perfectionist,
      react,
    },

    // RULES: Defines specific linting rules, their severity, and other customizations.
    // NOTE: These rules should come from the installed plugins defined in the `plugins` object.
    // More details: https://eslint.org/docs/latest/use/core-concepts/#rules
    rules: {
      // [ESLINT RULES]
      // Enforces the use of `===` and `!==`.
      eqeqeq: 2,

      // Enforces the use of curly {} in block statements (if, else, for, while...).
      curly: [2, 'all'],

      // Disallows the use of undeclared variables.
      'no-undef': 2,

      // Enforces no braces when they can be omitted. Incorrect: const foo = (x) => { return x; } Correct: const foo = (x) => x;
      'arrow-body-style': [2, 'as-needed'],

      // [REACT RULES]
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
      // Example: const Component = ({ optionalProp = 'default' }: ComponentProps) => {}
      'react/require-default-props': [
        2,
        {
          functions: 'defaultArguments',
        },
      ],

      // Allows spreading in JSX components (<MyCustomComponent {...props} />) and forbid on everything else (HTML tags, etc.)
      'react/jsx-props-no-spreading': [
        2,
        {
          custom: 'ignore',
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

      // [PERFECTIONIST RULES]
      // IMPORTS ORDER: Enforces a strict and consistent order for import statements.
      // NOTE: Disable `source.organizeImports` on `codeActionsOnSave` in VSCode Settings to avoid conflicts.
      'sort/imports': 0, // Note: Disable ESLint's rule to avoid conflicts.
      'perfectionist/sort-imports': [
        2,
        {
          // Natural order. Example: 'item2' < 'item10'.
          type: 'natural',

          // NOTE: Default values explicitly set for clarity.
          newlinesBetween: 'always',
          order: 'asc',
          ignoreCase: true,
          groups: [
            // Built-in or external installed modules. Example: import path from 'path' || import axios from 'axios'
            ['builtin', 'external'],
            // Internal types that are not in the same or parent directory. Example: import type { User } from '~/users'
            'internal-type',
            // Internal modules that are not in the same or parent directory. Example: import Button from '~/components/Button'
            'internal',
            // Parent or current directory types. Example: import type { FooProps } from '../Foo' || './Foo' || './index.d.ts'
            ['parent-type', 'sibling-type', 'index-type'],
            // Parent or current directory modules. Example: import foo from '../utils/foo' || './foo' || '.'
            ['parent', 'sibling', 'index'],
            // Side effect script files. Example: import './set-production-env.js'
            'side-effect',
            // Style files. Example: import './styles.scss' || import styles from './index.module.css'
            'side-effect-style',
            { newlinesBetween: 'never' },
            'style',
          ],
        },
      ],
      'perfectionist/sort-named-imports': [2, { type: 'natural' }],

      // OBJECTS ORDER: Enforces a strict and consistent order for object, types and other declarations.
      'perfectionist/sort-object-types': [2, perfectionistSortTypes],
      'perfectionist/sort-union-types': [2, { type: 'natural' }],
      'perfectionist/sort-interfaces': [2, perfectionistSortTypes],
      'perfectionist/sort-objects': [2, perfectionistSortObjects],
      'perfectionist/sort-enums': [2, { type: 'natural' }],
    },
  },
];
```

#### `eslint.constants.mjs`:

```js
export const booleanPrefixes = ['is', 'should', 'has', 'can', 'did', 'will'];

const perfectionistSortObjectCustomGroups = {
  id: {
    elementNamePattern: '^(?:id|.+Id)$',
    groupName: 'id',
    selector: 'property',
  },
  flag: {
    elementNamePattern: `^(?:${booleanPrefixes.join('|')})[A-Z].*$`, // Example: /^(?:a|b|c|)[A-Z].*$/
    groupName: 'flag',
    selector: 'property',
  },
};

export const perfectionistSortTypes = {
  ignoreCase: true,
  order: 'asc',
  type: 'natural',
  customGroups: [
    perfectionistSortObjectCustomGroups.id,
    {
      ...perfectionistSortObjectCustomGroups.flag,
      groupName: `required-${perfectionistSortObjectCustomGroups.flag.groupName}`,
      modifiers: ['required'],
    },
    {
      ...perfectionistSortObjectCustomGroups.flag,
      groupName: `optional-${perfectionistSortObjectCustomGroups.flag.groupName}`,
      modifiers: ['optional'],
    },
  ],
  groups: [
    perfectionistSortObjectCustomGroups.id.groupName,
    'required-property',
    'required-multiline-property',
    'optional-property',
    'optional-multiline-property',
    'required-flag',
    'optional-flag',
    'required-method',
    'optional-method',
  ],
};

export const perfectionistSortObjects = {
  ...perfectionistSortTypes,
  objectDeclarations: true,
  customGroups: [
    perfectionistSortObjectCustomGroups.id,
    perfectionistSortObjectCustomGroups.flag,
  ],
  destructuredObjects: {
    groups: true,
  },
  groups: [
    perfectionistSortObjectCustomGroups.id.groupName,
    'property',
    'multiline-property',
    perfectionistSortObjectCustomGroups.flag.groupName,
    'method',
  ],
};
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Configure Prettier <img src="https://cdn.simpleicons.org/prettier/000/F7B93E" alt="Prettier" align=left width=24>

The project is configured with Prettier as the code formatter to ensure consistent coding styles throughout the codebase.

The configuration used in this project is shown below. You can adjust it based on the specific needs of your project.

<details>
<summary>Show details</summary>

#### `.prettierrc.mjs`:

```js
export default {
  arrowParens: 'always', // Always include parentheses around arrow function parameters (e.g., (x) => x)
  bracketSameLine: false, // In HTML/JSX, put `>` of a multi-line element on a new line.
  endOfLine: 'auto', // Maintain existing line endings (LF/CRLF)
  jsxSingleQuote: false, // Use double quotes (`"`) in JSX instead of single quotes (`'`)
  printWidth: 80, // Wrap lines that exceed 80 characters for better readability
  semi: true, // Always add semicolons (`;`) at the end of statements
  singleQuote: true, // Use single quotes (`'`) instead of double quotes (`"`) for consistency
  tabWidth: 2, // Indent using 2 spaces per tab
  trailingComma: 'all', // Add trailing commas wherever possible (arrays, objects, function params)
};
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Configure TypeScript <img src="https://cdn.simpleicons.org/typescript/000/3178C6" alt="TypeScript" align=left width=24>

<details>
<summary>Show details</summary>

</details>

### Configure Vite & DTS <img src="https://cdn.simpleicons.org/vite/000/646CFF" alt="Vite" align=left width=24>

<details>
<summary>Show details</summary>

</details>

### Configure Vitest <img src="https://cdn.simpleicons.org/vitest/000/6E9F18" alt="Vitest" align=left width=24>

<details>
<summary>Show details</summary>

</details>

### Configure Storybook <img src="https://cdn.simpleicons.org/storybook/000/FF4785" alt="Storybook" align=left width=24>

<details>
<summary>Show details</summary>

</details>

### Configure Git Hooks <img src="https://cdn.simpleicons.org/lefthook/000/FF1E1E" alt="Lefthook" align=left width=24>

> [!NOTE]
>
> Git hooks are managed with _**Lefthook**_.
>
> Although _Husky_ is more extended, _Lefthook_ is a mature and actively maintained library that offers **better performance**, **parallel execution**, supports **partially staged files**, etc.

The different Git hooks used in this project and their respective purposes are:

- **pre-commit**: Runs before each commit to ensure that the staged code is properly linted and formatted. It supports partially staged files.
- **pre-push**: Executes before each push to ensure that all tests pass successfully.

> **💡 Tip**: Use the `--no-verify` or `-n` flag in the Git command to bypass these hooks.

<details>
<summary>Show details</summary>

#### `lefthook.yml`:

```yml
# NOTE:
# Lefthook creates a backup stash before running the pre-commit hook.
# Supports partially staged files.
pre-commit:
  parallel: false
  # Stop running commands and scripts if one of them fails.
  piped: true
  # Commands that will be executed before commit.
  commands:
    # Commands run in alphabetical order, so they are prefixed with numbers.
    1_lint:
      # Since linter can fail even though it fixes some errors, we don't fix them in order to prevent unstaged changes.
      glob: '*.{ts,tsx}'
      run: npm run lint:no-fix {staged_files}
    2_format:
      # Format staged code.
      run: npm run format
    3_update-index:
      # Update Git index to include changes made by previous commands.
      run: git update-index --again
pre-push:
  commands:
    test:
      # Allow push if all tests pass.
      # The tests run in the all the code committed, staged and unstaged.
      run: npm run test
```

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

### Configure GitHub Actions <img src="https://cdn.simpleicons.org/githubactions/000/2088FF" alt="GitHub Actions" align=left width=24>

<details>
<summary>Show details</summary>

- GitHub Workflows
- Semantic Release

</details>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## ✍ Create a Component[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-create-a-component)

### Create the Component <img src="https://cdn.simpleicons.org/react/000/61DAFB" alt="React" align=left width=24>

### Add Tests to the Component <img src="https://cdn.simpleicons.org/vitest/000/6E9F18" alt="Vitest" align=left width=24>

### Add the Component to the Storybook <img src="https://cdn.simpleicons.org/storybook/000/FF4785" alt="Storybook" align=left width=24>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

## 🚀 Publish Changes[![](https://raw.githubusercontent.com/aregtech/areg-sdk/master/docs/img/pin.svg)](#-publish-changes)

### Build the Library <img src="https://cdn.simpleicons.org/githubactions/000/2088FF" alt="GitHub Actions" align=left width=24>

### Generate Release and Deploy <img src="https://cdn.simpleicons.org/npm/000/CB3837" alt="NPM" align=left width=24>

<div align="right"><kbd><a href="#-table-of-contents">↑ Back to top ↑</a></kbd></div>

---

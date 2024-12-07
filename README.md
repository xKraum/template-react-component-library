# React Component Library Template

This project is an updated template for building a React Component Library.

## Index

1. [Project Stack](#project-stack)
1. [Available Scripts](#available-scripts)
1. [Configuration Files](#configuration-files)

## Project Stack

- **React 18**, **TypeScript**
- **Vite** - (Bundler), **Vite DTS Plugin** - (Build TS declaration files)
- **ESLint** - (Linter)
- **Prettier** - (Formatter)
- **Vitest**, **Jest**, **RTL** - (Tests)

## Available Scripts

### Build library

```
npm run build
```

### Run Prettier

```
npm run format
```

### Run ESLint

```
npm run lint
```

### Run tests

```
npm run test
```

### Run tests and watch to rerun on code changes

```
npm run test-watch
```

### Run tests with a server GUI

```
npm run test-gui
```

## Configuration Files

### `package.json`

#### Build

- `"type": "module"` -- Source code will use **ES6 syntax** (`import`/`export`).
- `"main": "dist/index.cjs.js"` -- Specifies the entry point when imported by a **_CommonJS_ environment**. If not set, defaults to `index.js`.
- `"module": "dist/index.es.js"` -- Specifies the entry point when imported by an **_ES Module_ environment**.
- `"types": "dist/index.d.ts"` -- Specifies the TS definition file for the TS type support.
- `"files": ["/dist"]` -- Specifies files/directories to be included in the _npm_ package.

#### Scripts

- `"build": "tsc -p tsconfig.build.json && vite build"` -- Builds the program using TS compiler custom file `tsconfig.build.json` and Vite.
- `"format": "prettier --write --parser typescript '\*_/_.{ts,tsx}'"` -- Formats TS files using Prettier.
- `"lint": "eslint . --ext .ts,.tsx --ignore-path .gitignore --fix"` -- Runs ESLint on TS files, ignoring paths in `.gitignore`, and automatically fixes issues.
- `"test": "vitest run"` -- Runs tests using Vitest.
- `"test-watch": "vitest"` -- Runs Vitest in watch mode, automatically re-running tests on file changes.
- `"test-gui": "vitest --ui"` -- Runs Vitest with a GUI for viewing test results.

#### Dependencies

- `peerDependencies` -- Dependencies that **must to be provided** by the consumer project (e.g., _React_).
- `devDependencies` -- Dependencies only used during development (e.g., _ESLint_). They **are not bundled** and are not installed when the package is used as a dependency in another project.

### `tsconfig.json`

Configures TypeScript for development, enabling type-checking, linting, support to modern JavaScript features, etc.

It is configured to **not emit output files** directly but instead to integrate with Vite, providing type validation and integration within the bundle.

### `tsconfig.build.json`

Extended version of `tsconfig.json` **tailored for production build process**.

This file is used to exclude files that are necessary for the development (such as tests) but not needed in the final production bundle.

Also, refer to the official documentation on [extending](https://www.typescriptlang.org/tsconfig/#extends) a `tsconfig.json` file and the available [compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

### `vite.config.ts`

- **Test Setup**: Configures _Vitest_ for testing, enabling global variables (like `describe`, `it`, `expect`), setting up the JS DOM environment, and defining a setup file (`setupTests.ts`) that runs before tests are executed.
- **Library Build Configuration**: Specifies how the TypeScript library is bundled, including entry points, output formats, and external dependencies to avoid bundling them (e.g., `peerDependencies`).
- **DTS Plugin**: Uses `vite-plugin-dts` to automatically generate TypeScript declaration files (.d.ts).
  _**Note**: It uses the custom `tsconfig.build.json` to ensure that declaration files are generated only for the source code, excluding test files from the generated .d.ts files._

### `setupTests.ts`

- **Jest-DOM Matchers Integration**: This setup file **extends Vitest's `expect`** with matchers from **Jest-DOM**, such as `.toBeInTheDocument()`.
- **TypeScript Integration**: Extends TypeScript's `Assertion` interface in **Vitest** to include **Jest-DOM** matchers, ensuring TypeScript type safety for these assertions.

```ts
import * as matchers from '@testing-library/jest-dom/matchers';
import { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

declare module 'vitest' {
  interface Assertion<T = any>
    extends jest.Matchers<void, T>,
      TestingLibraryMatchers<T, void> {}
}

expect.extend(matchers);
```

Also, check the official documentation for [extending matchers](https://vitest.dev/guide/extending-matchers).

/// <reference types="vitest/config" />
import { defineConfig, UserConfig } from 'vite';
import dts from 'vite-plugin-dts';
import type { InlineConfig } from 'vitest/node';
import { peerDependencies } from './package.json';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  test: {
    globals: true, // Enables global test APIs (e.g., `describe`, `it`).
    environment: 'jsdom', // Sets the test environment to jsdom (mimics a browser environment).
    setupFiles: './setupTests.ts', // Specifies a file to run before tests to set up the environment.
  },
  build: {
    lib: {
      entry: './src/index.ts', // Entry point for building the library.
      name: 'template-react-component-library', // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the formats (index.cjs.js & index.es.js).
      formats: ['cjs', 'es'], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Prevents peer dependencies to bundle them into the final output.
    },
    sourcemap: true, // Generates back the original source code (unminified) for debugging.
    emptyOutDir: true, // Clears the output directory before building so no old/outdated files are left behind.
  },
  plugins: [
    // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
    dts({
      // Specifies a custom tsconfig to avoid generating declaration files for test files (__test__/{Component}.test.d.ts).
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
} as VitestConfigExport);

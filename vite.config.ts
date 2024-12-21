/// <reference types="vitest/config" />
import fs from 'fs';
import { defineConfig, UserConfig } from 'vite';
import dts from 'vite-plugin-dts';
import type { InlineConfig } from 'vitest/node';
import { peerDependencies } from './package.json';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

const generateComponentEntryPoints = (
  directory: string,
): Record<string, string> => {
  const entries: Record<string, string> = {};
  const directories = fs.readdirSync(directory, { withFileTypes: true });

  directories.forEach(({ parentPath, name }) => {
    const componentPath = `${parentPath}/${name}/${name}.tsx`;
    if (fs.existsSync(componentPath)) {
      entries[name] = componentPath;
    }
  });

  return entries;
};

export default defineConfig({
  test: {
    globals: true, // Enables global test APIs (e.g., `describe`, `it`).
    environment: 'jsdom', // Sets the test environment to jsdom (mimics a browser environment).
    setupFiles: './setupTests.ts', // Specifies a file to run before tests to set up the environment.
  },
  build: {
    lib: {
      entry: {
        index: './src/index.ts', // Full library entry point.
        ...generateComponentEntryPoints('src/components'), // Individual components entry points.
      },
      name: 'template-react-component-library', // Sets the name of the generated library.
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es'], // Specifies the output formats (ES modules).
    },
    rollupOptions: {
      external: ['react/jsx-runtime', ...Object.keys(peerDependencies)], // Prevents peer dependencies to bundle them into the final output.
      globals: {
        'react/jsx-runtime': 'react/jsx-runtime',
      },
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js', // Code-splitting generated chunks.
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: ({ name }) =>
          name === 'index' ? '[name].js' : 'components/[name]/[name].js', // Entry points for the imported library.}
      },
    },
    sourcemap: true, // Generates back the original source code (unminified) for debugging.
    emptyOutDir: true, // Clears the output directory before building so no old/outdated files are left behind.
  },
  plugins: [
    // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
    dts({
      tsconfigPath: './tsconfig.build.json', // Specifies a custom tsconfig to avoid generating declaration files for test files (__test__/{Component}.test.d.ts).
    }),
  ],
} as VitestConfigExport);

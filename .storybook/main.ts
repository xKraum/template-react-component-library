import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/__docs__/*.stories.tsx', '../src/**/__docs__/*.mdx'],
  addons: [
    '@storybook/addon-essentials', // Collection of addons like Background, Viewport, etc.
    // NOTE: Install more addons and add them here as needed.
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;

import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../../public'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-addon-themes',
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.cjs'],
        alias: {
          '@app': path.resolve(__dirname, '../../src/app'),
          '@processes': path.resolve(__dirname, '../../src/processes'),
          '@pages': path.resolve(__dirname, '../../src/pages'),
          '@widgets': path.resolve(__dirname, '../../src/widgets'),
          '@features': path.resolve(__dirname, '../../src/features'),
          '@entities': path.resolve(__dirname, '../../src/entities'),
          '@shared': path.resolve(__dirname, '../../src/shared'),
        },
      },
    };
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};
export default config;

import type { Preview } from '@storybook/react';
import type { StoryFn } from '@storybook/react';
import type { StoryContext } from '@storybook/react';
import { ThemeDecorator } from '@shared/config';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const parameters = {
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: 'theme-light', color: '#ffffff', default: true },
      { name: 'dark', class: 'theme-dark', color: '#000000' },
    ],
  },
};

export const decorators = [
  (Story: StoryFn, context: StoryContext) => ThemeDecorator({ Story, context }),
];

export default preview;

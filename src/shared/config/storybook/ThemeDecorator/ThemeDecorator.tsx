import { themePick } from '@entities/theme';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import { antdTheme } from '@app/styles';
import React, { FC } from 'react';
import type { StoryContext, StoryFn } from '@storybook/react';

interface ThemeDecoratorProps {
  Story: StoryFn;
  context: StoryContext;
}

export const ThemeDecorator: FC<ThemeDecoratorProps> = ({ Story, context }) => {
  const currentTheme = themePick(context.globals.theme);

  return (
    <ThemeProvider theme={currentTheme}>
      <ConfigProvider theme={antdTheme(currentTheme)}>
        <Story />
      </ConfigProvider>
    </ThemeProvider>
  );
};

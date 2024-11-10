import { antdTheme } from '@app/styles';
import { themePick } from '@entities/theme';
import type { StoryContext, StoryFn } from '@storybook/react';
import { ConfigProvider } from 'antd';
import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

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

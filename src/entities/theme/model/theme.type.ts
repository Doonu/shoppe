import { DefaultTheme } from 'styled-components';

export type ThemeVariant = 'light' | 'dark' | 'purple';

export interface ThemeInitialState {
  themeType: ThemeVariant;
  themeOptions: DefaultTheme;
}

import { DarkTheme, lightTheme } from '@app/styles';

import type { ThemeVariant } from '../model/theme.type';

export const themePick = (themeType: ThemeVariant) => {
  switch (themeType) {
    case 'dark':
      return DarkTheme;
    default:
      return lightTheme;
  }
};

import { FC, PropsWithChildren } from 'react';

import { selectorThemeType, themePick } from '@entities/theme';
import { useAppSelector } from '@shared/hooks';
import { ThemeProvider } from 'styled-components';

const WithTheme: FC<PropsWithChildren> = ({ children }) => {
  const theme = useAppSelector(selectorThemeType);

  return <ThemeProvider theme={themePick(theme)}>{children}</ThemeProvider>;
};

export default WithTheme;

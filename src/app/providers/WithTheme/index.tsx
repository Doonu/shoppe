import { selectorThemeOptions } from '@entities/theme';
import { useAppSelector } from '@shared/hooks';
import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

const WithTheme: FC<PropsWithChildren> = ({ children }) => {
  const theme = useAppSelector(selectorThemeOptions);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default WithTheme;

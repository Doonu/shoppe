import { selectorThemeType } from '@entities/theme';
import { useAppSelector } from '@shared/hooks';
import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, lightTheme } from '@app/styles';

const WithTheme: FC<PropsWithChildren> = ({ children }) => {
  const theme = useAppSelector(selectorThemeType);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : DarkTheme}>{children}</ThemeProvider>
  );
};

export default WithTheme;

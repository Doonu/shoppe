import { antdTheme } from '@app/styles';
import { selectorThemeOptions } from '@entities/theme';
import { useAppSelector } from '@shared/hooks';
import { ConfigProvider } from 'antd';
import React, { FC, PropsWithChildren } from 'react';

const WithAntdConfig: FC<PropsWithChildren> = ({ children }) => {
  const theme = useAppSelector(selectorThemeOptions);

  return <ConfigProvider theme={antdTheme(theme)}>{children}</ConfigProvider>;
};

export default WithAntdConfig;

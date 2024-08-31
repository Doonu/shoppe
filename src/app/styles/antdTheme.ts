import { ThemeConfig } from 'antd/es/config-provider/context';
import type { DefaultTheme } from 'styled-components';

export const antdTheme = (theme: DefaultTheme): ThemeConfig => ({
  token: {
    fontFamily: 'Roboto',
    colorPrimary: theme.core.colorPrimary,
    colorBgLayout: theme.core.colorBackground,
    colorPrimaryText: theme.core.colorTextPrimary,
    colorTextSecondary: theme.core.colorTextSecondary,
  },
  components: {
    Select: {
      colorBgContainer: theme.core.colorBackground,
    },
  },
});

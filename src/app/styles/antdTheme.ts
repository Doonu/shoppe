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
      colorBgContainer: theme.core.colorSecondary,
    },
    Drawer: {
      colorBgElevated: theme.core.colorBackground,
    },
    Menu: {
      colorBgContainer: theme.core.colorBackground,
      itemSelectedBg: 'transparent',
      itemSelectedColor: theme.core.colorSecondary,
      itemColor: theme.core.colorPrimary,
    },
    Tabs: {
      itemColor: theme.core.colorPrimary,
      itemSelectedColor: theme.core.colorPrimary,
      colorBorderSecondary: 'transparent',
    },
    Button: {
      defaultBg: theme.core.colorBackground,
    },
  },
});

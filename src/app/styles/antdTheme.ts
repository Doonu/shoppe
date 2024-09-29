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
      selectorBg: theme.core.colorBackground,
      colorTextPlaceholder: theme.core.colorPrimary,
      optionActiveBg: theme.core.colorAccentPrimary,
      optionSelectedBg: theme.core.colorTextSecondary,
      optionSelectedColor: theme.core.colorBackground,
      colorTextQuaternary: theme.core.colorPrimary,
      colorText: theme.core.colorPrimary,
      colorBgElevated: theme.core.colorBackground,
    },
    Drawer: {
      colorBgElevated: theme.core.colorBackground,
    },
    Slider: {
      railBg: theme.core.colorAccentPrimary,
      railHoverBg: theme.core.colorSurface,
      trackBg: theme.core.colorPrimary,
      handleColor: theme.core.colorPrimary,
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
      colorBgContainer: theme.core.colorBackground,
      colorText: theme.core.colorTextPrimary,
      borderRadius: 4,
      defaultHoverBg: theme.core.colorPrimary,
      colorPrimaryHover: theme.core.colorBackground,
    },
    Switch: {
      handleBg: theme.core.colorBackground,
      colorTextQuaternary: theme.core.colorTextSecondary,
    },
  },
});

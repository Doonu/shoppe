import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    core: {
      colorPrimary: string;
      colorSecondary: string;
      colorTextPrimary: string;
      colorTextSecondary: string;
      colorDisabled: string;
      colorErrorPrimary: string;
      colorSystem: string;
      colorAccentPrimary: string;
      colorBackground: string;
      colorSurface: string;
      colorDivider: string;
      boxShadow: string;
    };
    borderRadius: {
      roundedNon: string;
      roundedXS: string;
      roundedS: string;
      roundedM: string;
      roundedL: string;
      roundedXL: string;
      roundedFull: string;
    };
    shadow: {
      base: string;
      active: string;
    };
    breakpoints: {
      maxMobile: string;
      maxTablets: string;
      maxLaptops: string;
      maxDesktops: string;
    };
    size: {
      headerL: string;
      headerS: string;
    };
  }
}

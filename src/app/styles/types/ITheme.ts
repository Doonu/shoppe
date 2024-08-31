import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      base: {
        base0: string;
        base50: string;
        base100: string;
        base200: string;
        base300: string;
        base400: string;
        base500: string;
        base600: string;
        base700: string;
        base800: string;
        base900: string;
        base950: string;
        base1000: string;
      };
      redErrors: {
        redErrors50: string;
        redErrors100: string;
        redErrors200: string;
        redErrors300: string;
        redErrors400: string;
        redErrors500: string;
        redErrors600: string;
        primary: string;
        redErrors800: string;
        redErrors900: string;
      };
    };
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
  }
}

import { breakpoints } from '@shared/constants';
import { DefaultTheme } from 'styled-components';

const lightCore: DefaultTheme['core'] = {
  colorPrimary: '#1C1C1C',
  colorSecondary: '#A18A68',
  colorTextPrimary: '#1C1C1C',
  colorTextSecondary: '#707070',
  colorDisabled: '#EFEFEF',
  colorErrorPrimary: '#C51400',
  colorSystem: 'red',
  colorAccentPrimary: 'red',
  colorBackground: '#FFFFFF',
  colorSurface: 'red',
  colorDivider: 'red',
};

export const lightTheme: DefaultTheme = {
  core: lightCore,
  borderRadius: {
    roundedNon: '0px',
    roundedXS: '4px',
    roundedS: '8px',
    roundedM: '12px',
    roundedL: '16px',
    roundedXL: '20px',
    roundedFull: '99%',
  },
  shadow: {
    base: '0px 0px 12px 0px rgba(14, 53, 42, .1)',
    active: '0px 0px 20px 0px rgba(14, 53, 42, .2)',
  },
  breakpoints: {
    maxMobile: `${breakpoints.maxMobile}px`,
    maxTablets: `${breakpoints.maxTablets}px`,
    maxLaptops: `${breakpoints.maxLaptops}px`,
    maxDesktops: `${breakpoints.maxDesktops}px`,
  },
  components: {
    Tabs: {
      colorBorderSecondary: lightCore.colorTextPrimary,
    },
  },
};

export const DarkTheme: DefaultTheme = {
  core: {
    colorPrimary: 'blue',
    colorSecondary: 'blue',
    colorTextPrimary: 'blue',
    colorTextSecondary: 'blue',
    colorDisabled: 'blue',
    colorErrorPrimary: 'blue',
    colorSystem: 'blue',
    colorAccentPrimary: 'blue',
    colorBackground: 'blue',
    colorSurface: 'blue',
    colorDivider: 'blue',
  },
  borderRadius: {
    roundedNon: '0px',
    roundedXS: '4px',
    roundedS: '8px',
    roundedM: '12px',
    roundedL: '16px',
    roundedXL: '20px',
    roundedFull: '99%',
  },
  shadow: {
    base: '0px 0px 12px 0px rgba(14, 53, 42, .1)',
    active: '0px 0px 20px 0px rgba(14, 53, 42, .2)',
  },
  breakpoints: {
    maxMobile: `${breakpoints.maxMobile}px`,
    maxTablets: `${breakpoints.maxTablets}px`,
    maxLaptops: `${breakpoints.maxLaptops}px`,
    maxDesktops: `${breakpoints.maxDesktops}px`,
  },
};

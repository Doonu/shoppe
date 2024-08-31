import { breakpoints } from '@shared/constants';
import { DefaultTheme } from 'styled-components';

const colors: DefaultTheme['colors'] = {
  base: {
    base0: '#FFFFFF',
    base50: '#EFEFEF',
    base100: '#E6E7E6',
    base200: '#D0D1D0',
    base300: '#B0B1AF',
    base400: '#888987',
    base500: '#707070',
    base600: '#5D5E5C',
    base700: '#4E504E',
    base800: '#444644',
    base900: '#404140',
    base950: '#262626',
    base1000: '#1C1C1C',
  },
  redErrors: {
    redErrors50: '#FFF2F0',
    redErrors100: '#FFE0DD',
    redErrors200: '#FFC7C1',
    redErrors300: '#FFA095',
    redErrors400: '#FF6A59',
    redErrors500: '#FF3C26',
    redErrors600: '#FC1F06',
    primary: '#C51400',
    redErrors800: '#AF1605',
    redErrors900: '#90190C',
  },
};

export const lightTheme: DefaultTheme = {
  colors,
  core: {
    colorPrimary: colors.base.base0,
    colorSecondary: '#A18A68',
    colorTextPrimary: colors.base.base1000,
    colorTextSecondary: colors.base.base500,
    colorDisabled: colors.base.base50,
    colorErrorPrimary: colors.redErrors.primary,
    colorSystem: 'red',
    colorAccentPrimary: 'red',
    colorBackground: colors.base.base200,
    colorSurface: 'red',
    colorDivider: 'red',
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
    maxOldDesktops: `${breakpoints.maxOldDesktops}px`,
    maxDesktops: `${breakpoints.maxDesktops}px`,
  },
};

export const DarkTheme: DefaultTheme = {
  colors,
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
    maxOldDesktops: `${breakpoints.maxOldDesktops}px`,
    maxDesktops: `${breakpoints.maxDesktops}px`,
  },
};

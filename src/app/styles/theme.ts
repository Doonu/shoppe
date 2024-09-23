import { breakpoints } from '@shared/constants';
import { DefaultTheme } from 'styled-components';

// TODO - добавить размеры (Header)

const borderRadius: DefaultTheme['borderRadius'] = {
  roundedNon: '0px',
  roundedXS: '4px',
  roundedS: '8px',
  roundedM: '12px',
  roundedL: '16px',
  roundedXL: '20px',
  roundedFull: '99%',
};
const shadow: DefaultTheme['shadow'] = {
  base: '0px 0px 12px 0px rgba(14, 53, 42, .1)',
  active: '0px 0px 20px 0px rgba(14, 53, 42, .2)',
};
const Breakpoints: DefaultTheme['breakpoints'] = {
  maxMobile: `${breakpoints.maxMobile}px`,
  maxTablets: `${breakpoints.maxTablets}px`,
  maxLaptops: `${breakpoints.maxLaptops}px`,
  maxDesktops: `${breakpoints.maxDesktops}px`,
};
const size: DefaultTheme['size'] = {
  headerL: '104px',
  headerS: '50px',
};

const lightCore: DefaultTheme['core'] = {
  colorPrimary: '#1C1C1C',
  colorSecondary: '#A18A68',
  colorTextPrimary: '#1C1C1C',
  colorTextSecondary: '#707070',
  colorDisabled: '#EFEFEF',
  colorErrorPrimary: '#C51400',
  colorAccentPrimary: '#D8D8D8',
  colorSurface: '#EFEFEF',
  colorSystem: 'red',
  colorBackground: '#FFFFFF',
  colorDivider: 'red',
};

const darkCore: DefaultTheme['core'] = {
  colorPrimary: '#ffffff',
  colorSecondary: '#B4A186',
  colorTextPrimary: '#ffffff',
  colorTextSecondary: '#9A9A9A',
  colorDisabled: '#EFEFEF',
  colorErrorPrimary: '#C51400',
  colorAccentPrimary: '#3D3D3D',
  colorSurface: '#272727',
  colorSystem: 'red',
  colorBackground: '#000000',
  colorDivider: 'red',
};

export const lightTheme: DefaultTheme = {
  core: lightCore,
  borderRadius,
  shadow,
  size,
  breakpoints: Breakpoints,
};

export const DarkTheme: DefaultTheme = {
  core: darkCore,
  borderRadius,
  shadow,
  size,
  breakpoints: Breakpoints,
};

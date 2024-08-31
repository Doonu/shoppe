import type { RootState } from '@app/store';

export const selectorThemeType = (state: RootState) => state.theme.themeType;
export const selectorThemeOptions = (state: RootState) => state.theme.themeOptions;

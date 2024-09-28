import type { RootState } from '@app/store';

export const selectorThemeType = (state: RootState) => state.theme.themeType;

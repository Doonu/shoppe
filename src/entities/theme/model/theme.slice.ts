import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { ThemeInitialState, ThemeVariant } from './theme.types';

const initialState: ThemeInitialState = {
  themeType: 'light',
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state: ThemeInitialState, { payload }: PayloadAction<ThemeVariant>) => {
      state.themeType = payload;
    },
  },
});

export const { switchTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;

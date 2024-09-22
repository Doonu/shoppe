import { lightTheme, DarkTheme } from '@app/styles';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { ThemeInitialState, ThemeVariant } from './theme.types';
import { themePick } from '../lib/themePick';

// TODO - убрать themeOptions
const initialState: ThemeInitialState = {
  themeType: 'light',
  themeOptions: lightTheme,
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state: ThemeInitialState, { payload }: PayloadAction<ThemeVariant>) => {
      state.themeType = payload;
      state.themeOptions = themePick(payload);
    },
  },
});

export const { switchTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;

import { ThemeSlice } from '@entities/theme';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  theme: ThemeSlice,
});

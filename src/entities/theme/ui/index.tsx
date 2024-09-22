import { selectorThemeType, switchTheme } from '@entities/theme';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

import { OptionsTheme } from '../lib/optionsTheme';
import { ThemeVariant } from '../model/theme.types';

export const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const theme = useAppSelector(selectorThemeType);

  const handlerSwitchTheme = (value: ThemeVariant) => {
    dispatch(switchTheme(value));
  };

  return <Select value={theme} onSelect={handlerSwitchTheme} options={OptionsTheme(t)} />;
};

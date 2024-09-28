import { selectorThemeType, switchTheme, OptionsTheme, ThemeVariant } from '@entities/theme';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

export const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const theme = useAppSelector(selectorThemeType);

  const handlerSwitchTheme = (value: ThemeVariant) => {
    dispatch(switchTheme(value));
  };

  return <Select value={theme} onSelect={handlerSwitchTheme} options={OptionsTheme(t)} />;
};

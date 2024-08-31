import { theme } from '@shared/strings';
import { SelectProps } from 'antd';
import type { TFunction } from 'i18next';

import type { ThemeVariant } from '../model/theme.type';

export const OptionsTheme = (t: TFunction): SelectProps['options'] => [
  {
    title: t(theme.dark),
    value: 'dark' as ThemeVariant,
    label: t(theme.dark),
  },
  {
    title: t(theme.light),
    value: 'light' as ThemeVariant,
    label: t(theme.light),
  },
];

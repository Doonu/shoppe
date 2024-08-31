import { ThemeSwitcher } from '@entities/theme';
import { faik } from '@shared/lib';
import { shared } from '@shared/strings';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation();

  faik('f');

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <ThemeSwitcher />
      <Button onClick={toggle}>{t(shared.translate)}</Button>
    </div>
  );
};

export default HomePage;

import { ThemeSwitcher } from '@entities/theme';
import { faik } from '@shared/lib';
import { shared } from '@shared/strings';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  faik('f');

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    navigate({
      pathname: '/order/23',
    });
  };

  return (
    <div>
      <ThemeSwitcher />
      <Button onClick={toggle}>{t(shared.translate)}</Button>
    </div>
  );
};

export default HomePage;

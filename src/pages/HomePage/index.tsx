import { ThemeSwitcher } from '@entities/theme';
import { validateValue } from '@shared/lib';
import { shared } from '@shared/strings';
import { Button } from '@shared/ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  validateValue(100);

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    navigate({
      pathname: '/shop/23',
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

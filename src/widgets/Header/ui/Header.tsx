import { Menu } from '@features/Menu';
import { useDevice } from '@shared/hooks';
import { useState } from 'react';

import BurgerMenu from './BurgerMenu';
import { SBurgerMenuIcon, SHeader, SLogo } from './header.styles';
import HeaderMobile from './HeaderMobile';

const Header = () => {
  const { isTablets } = useDevice();

  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const handlerOpenMenu = () => {
    setIsOpenBurgerMenu((prev) => !prev);
  };

  return (
    <SHeader>
      {isTablets && (
        <>
          <BurgerMenu isOpen={isOpenBurgerMenu} onClose={handlerOpenMenu} />
          <HeaderMobile iconDrawer={<SBurgerMenuIcon onClick={handlerOpenMenu} />} />
        </>
      )}

      {!isTablets && (
        <>
          <SLogo />
          <Menu />
        </>
      )}
    </SHeader>
  );
};

export default Header;

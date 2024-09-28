import { Menu } from '@features/Menu';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { BurgerMenuProps } from '../../model/burgerMenu.types';
import HeaderMobile from '../HeaderMobile';
import { SBurgerMenu, SBurgerMenuCloseIcon, SDrawer, SHeader } from './burgerMenu.styles';

const BurgerMenu = ({ onClose, isOpen }: BurgerMenuProps) => (
  <SDrawer open={isOpen}>
    <SBurgerMenu>
      <SHeader>
        <HeaderMobile iconDrawer={<SBurgerMenuCloseIcon icon={faClose} onClick={onClose} />} />
      </SHeader>
      <Menu />
    </SBurgerMenu>
  </SDrawer>
);

export default BurgerMenu;

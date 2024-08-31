import { Menu } from '@features/Menu';
import React from 'react';

import { SDrawer } from './burgerMenu.styles';
import { BurgerMenuProps } from '../../model/burgerMenu.type';

const BurgerMenu = ({ onClose, isOpen }: BurgerMenuProps) => (
  <SDrawer open={isOpen} onClose={onClose}>
    <Menu />
  </SDrawer>
);

export default BurgerMenu;

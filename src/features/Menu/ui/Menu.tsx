import { useDevice } from '@shared/hooks';
import React from 'react';

import {
  CartIcon,
  LogoutIcon,
  SDivider,
  SearchIcon,
  SFutures,
  SMenu,
  SMenuAntd,
  STabs,
  UserIcon,
} from './menu.styles';
import { itemsMenu, itemsMobileMenu } from '../lib/itemsMenu';
import MenuItemIcon from './MenuItemIcon/MenuItemIcon';

export const Menu = () => {
  const { isTablets } = useDevice();

  return (
    <SMenu>
      {isTablets && <SMenuAntd items={itemsMobileMenu} />}
      {!isTablets && <STabs defaultActiveKey="1" items={itemsMenu} />}
      <SDivider />
      <SFutures>
        {!isTablets && (
          <>
            <SearchIcon />
            <CartIcon />
            <UserIcon />
          </>
        )}

        {isTablets && (
          <>
            <MenuItemIcon icon={<UserIcon />} description="My account" />
            <MenuItemIcon icon={<LogoutIcon />} description="Logout" />
          </>
        )}
      </SFutures>
    </SMenu>
  );
};

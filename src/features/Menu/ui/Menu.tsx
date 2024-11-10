import { useDevice } from '@shared/hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

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
import MenuItemIcon from './MenuItemIcon/MenuItemIcon';
import { itemsMenu, itemsMobileMenu } from '../lib/itemsMenu';
import { useMenuActive } from '../lib/useMenuActive';

export const Menu = () => {
  const { isTablets } = useDevice();
  const activeKey = useMenuActive();
  const navigate = useNavigate();

  return (
    <SMenu>
      {isTablets && (
        <SMenuAntd
          onClick={({ key }) => navigate(`/${key}`)}
          defaultSelectedKeys={[activeKey]}
          items={itemsMobileMenu}
        />
      )}
      {!isTablets && (
        <STabs onTabClick={(key) => navigate(`/${key}`)} activeKey={activeKey} items={itemsMenu} />
      )}
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

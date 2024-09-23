import { useDevice } from '@shared/hooks';
import { Tabs } from '@shared/ui';
import React from 'react';

import {
  CartIcon,
  SDivider,
  SearchIcon,
  SFutures,
  SMenu,
  SMenuAntd,
  STabs,
  UserIcon,
} from './menu.styles';
import { itemsMenu } from '../lib/itemsMenu';

export const Menu = () => {
  const { isTablets } = useDevice();

  return (
    <SMenu>
      {isTablets && <SMenuAntd items={itemsMenu} />}
      {!isTablets && <STabs defaultActiveKey="1" items={itemsMenu} />}
      <SDivider />
      <SFutures>
        <SearchIcon />
        <CartIcon />
        <UserIcon />
      </SFutures>
    </SMenu>
  );
};

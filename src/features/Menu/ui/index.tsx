import { Cart, Search, User } from '@shared/assets';
import { useDevice } from '@shared/hooks';
import { Tabs } from '@shared/ui';
import React from 'react';

import { SDivider, SFutures, SMenu, SMenuAntd } from './menu.styles';
import { itemsMenu } from '../lib/itemsMenu';

export const Menu = () => {
  const { isTablets } = useDevice();

  return (
    <SMenu>
      {isTablets && <SMenuAntd items={itemsMenu} />}
      {!isTablets && <Tabs defaultActiveKey="1" items={itemsMenu} />}
      <SDivider />
      <SFutures>
        <Search />
        <Cart />
        <User />
      </SFutures>
    </SMenu>
  );
};

import React from 'react';

import { ShopFilter } from '@entities/shop';
import { ShopList } from '@widgets/ShopList';

import { SShop, SShopPage, STitle } from './shopPage.styles';

const ShopPage = () => (
  <SShopPage>
    <STitle>Shop The Latest</STitle>
    <SShop>
      <ShopFilter />
      <ShopList />
    </SShop>
  </SShopPage>
);

export default ShopPage;

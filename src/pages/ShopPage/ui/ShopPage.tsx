import React from 'react';

import { ShopFilter } from '@entities/shop';

import { SShop, SShopPage, STitle } from './shopPage.styles';

const ShopPage = () => (
  <SShopPage>
    <STitle>Shop The Latest</STitle>
    <SShop>
      <ShopFilter />
      <div>List</div>
    </SShop>
  </SShopPage>
);

export default ShopPage;

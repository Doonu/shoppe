import { ShopFilter } from '@entities/shop';
import { API } from '@shared/api';
import { ShopList } from '@widgets/ShopList';
import React, { useEffect } from 'react';

import { SShop, SShopPage, STitle } from './shopPage.styles';

const ShopPage = () => {
  const fetchProducts = async () => {
    await API({
      url: '/api/v1/users/',
      method: 'GET',
      // eslint-disable-next-line no-console
    }).then((data) => console.log(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SShopPage>
      <STitle>Shop The Latest</STitle>
      <SShop>
        <ShopFilter />
        <ShopList />
      </SShop>
    </SShopPage>
  );
};

export default ShopPage;

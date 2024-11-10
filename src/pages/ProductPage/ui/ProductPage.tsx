import { ProductFilter } from '@entities/product';
import { API } from '@shared/api';
import { ProductList } from '@widgets/ProductList';
import React, { useEffect } from 'react';

import { SProduct, SProductPage, STitle } from './productPage.styles';

const ProductPage = () => {
  const fetchProducts = async () => {
    await API({
      url: '/api/v1/users/',
      method: 'GET',
      // eslint-disable-next-line no-console
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SProductPage>
      <STitle>Shop The Latest</STitle>
      <SProduct>
        <ProductFilter />
        <ProductList />
      </SProduct>
    </SProductPage>
  );
};

export default ProductPage;

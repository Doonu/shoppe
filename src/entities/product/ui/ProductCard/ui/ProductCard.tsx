import { formatNumber, IProduct } from '@entities/product';
import React, { FC } from 'react';

import { SImage, SPrice, SProductCard, STitle } from './productCard.styles';

export const ProductCard: FC<IProduct> = (shop) => (
  <SProductCard>
    <SImage src={shop.img} />
    <STitle>{shop.name}</STitle>
    <SPrice>{formatNumber(shop.price)}</SPrice>
  </SProductCard>
);

import { formatNumber, IShop } from '@entities/shop';
import React, { FC } from 'react';

import { SImage, SPrice, SShopCard, STitle } from './shopCard.styles';

export const ShopCard: FC<IShop> = (shop) => (
  <SShopCard>
    <SImage src={shop.img} />
    <STitle>{shop.name}</STitle>
    <SPrice>{formatNumber(shop.price)}</SPrice>
  </SShopCard>
);

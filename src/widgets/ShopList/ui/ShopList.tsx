import React from 'react';

import { IShop, ShopCard } from '@entities/shop';

import { SList } from './shopList.styles';

const data: IShop[] = [
  {
    id: 1,
    sale: 21,
    name: 'Lira Earrings',
    img: 'Img.png',
    price: 20,
  },
  {
    id: 2,
    sale: 0,
    name: 'Hal Earrings',
    img: 'Img.png',
    price: 25,
  },
  {
    id: 3,
    sale: 0,
    name: 'Kaede Hair Pin Set Of 3',
    img: 'Img.png',
    price: 30,
  },
  {
    id: 4,
    sale: 0,
    name: 'Hair Pin Set of 3',
    img: 'Img.png',
    price: 30,
  },
];

export const ShopList = () => (
  <SList>
    {data.map((item) => (
      <ShopCard key={item.id} {...item} />
    ))}
  </SList>
);

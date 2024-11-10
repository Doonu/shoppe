import { ProductCard, IProduct } from '@entities/product';
import React from 'react';

import { SList } from './productList.styles';

const data: IProduct[] = [
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

export const ProductList = () => (
  <SList>
    {data.map((item) => (
      <ProductCard key={item.id} {...item} />
    ))}
  </SList>
);

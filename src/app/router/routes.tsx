import React, { lazy } from 'react';

import NotFoundPage from '@pages/NotFoundPage';
import { ERoutes } from '@shared/config';
import { createBrowserRouter } from 'react-router-dom';

import DefaultScreen from '../layout/DefaultScreen';

const HomePageLazy = lazy(() => import('../../pages/HomePage'));
const AuthPageLazy = lazy(() => import('../../pages/AuthPage'));
const ShopPageLazy = lazy(() => import('../../pages/ShopPage'));

export const publicRoutes = createBrowserRouter([
  {
    path: ERoutes.HOME_PAGE,
    element: <DefaultScreen />,
    errorElement: <NotFoundPage />,
    children: [{ path: ERoutes.HOME_PAGE, element: <AuthPageLazy />, children: [] }],
  },
]);

export const privateRoutes = createBrowserRouter([
  {
    path: ERoutes.HOME_PAGE,
    element: <DefaultScreen />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: ERoutes.HOME_PAGE,
        element: <HomePageLazy />,
      },
      {
        path: ERoutes.SHOP_PAGE,
        element: <ShopPageLazy />,
      },
      {
        path: '/shop/:id',
        element: <div>shop id</div>,
      },
    ],
  },
]);

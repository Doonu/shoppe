import NotFoundPage from '@pages/NotFoundPage';
import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ERoutes } from './ERoutes';
import DefaultScreen from '../layout/DefaultScreen';

const HomePageLazy = lazy(() => import('../../pages/HomePage'));
const AuthPageLazy = lazy(() => import('../../pages/AuthPage'));

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
    children: [{ path: ERoutes.HOME_PAGE, element: <HomePageLazy />, children: [] }],
  },
]);

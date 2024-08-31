import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { publicRoutes, privateRoutes } from './routes';

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={privateRoutes} />
  </Suspense>
);

export default Router;

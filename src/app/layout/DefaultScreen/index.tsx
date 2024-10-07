import React from 'react';

import NotFoundNetworkPage from '@pages/NotFoundNetworkPage';
import { useNetwork } from '@shared/hooks';
import { Header } from '@widgets/Header';
import { Outlet } from 'react-router-dom';

import { SDefaultScreen, SLayout, SWrapper } from './defaultScreen.styles';

const DefaultScreen = () => {
  const isOnline = useNetwork();

  if (!isOnline) return <NotFoundNetworkPage />;

  return (
    <SDefaultScreen>
      <Header />
      <SLayout>
        <SWrapper>
          <Outlet />
        </SWrapper>
      </SLayout>
    </SDefaultScreen>
  );
};

export default DefaultScreen;

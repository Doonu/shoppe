import { Header } from '@widgets/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { SDefaultScreen, SLayout, SWrapper } from './defaultScreen.styles';

const DefaultScreen = () => (
  <SDefaultScreen>
    <Header />
    <SLayout>
      <SWrapper>
        <Outlet />
      </SWrapper>
    </SLayout>
  </SDefaultScreen>
);

export default DefaultScreen;

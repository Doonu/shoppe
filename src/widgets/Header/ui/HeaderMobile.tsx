import React, { FC, ReactNode } from 'react';
import { CartIcon, SLogo, SStrippedMenu } from './header.styles';

interface HeaderMobileProps {
  iconDrawer: ReactNode;
}

const HeaderMobile: FC<HeaderMobileProps> = ({ iconDrawer }) => {
  return (
    <>
      <SLogo />
      <SStrippedMenu>
        <CartIcon />
        {iconDrawer}
      </SStrippedMenu>
    </>
  );
};

export default HeaderMobile;

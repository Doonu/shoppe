import React, { FC, ReactNode } from 'react';

import { SDescription, SMenuItem } from './menuItemIcon.styles';

interface MenuItemIconProps {
  icon: ReactNode;
  description: string;
}

const MenuItemIcon: FC<MenuItemIconProps> = ({ icon, description }) => (
  <SMenuItem>
    {icon} <SDescription>{description}</SDescription>
  </SMenuItem>
);

export default MenuItemIcon;

import { Select, Slider } from '@shared/ui';
import { Input, Switch } from 'antd';
import React from 'react';

import { SGroupSelect, SShopFilter, SSwitch } from './shopFilter.styles';

export const ShopFilter = () => (
  <SShopFilter>
    <Input placeholder="Search..." />
    <SGroupSelect>
      <Select placeholder="Shop By" />
      <Select placeholder="Sort By" />
    </SGroupSelect>
    <Slider range defaultValue={[10, 180]} />
    <SSwitch>
      On sale
      <Switch />
    </SSwitch>
    <SSwitch>
      In stock
      <Switch />
    </SSwitch>
  </SShopFilter>
);

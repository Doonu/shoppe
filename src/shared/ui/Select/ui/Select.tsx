import { SelectProps } from 'antd';
import React, { FC } from 'react';

import { SSelect } from './select.styles';

export const Select: FC<SelectProps> = ({ ...props }) => <SSelect {...props} />;

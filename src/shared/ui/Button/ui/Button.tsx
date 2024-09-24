import React, { FC } from 'react';

import { SButton } from './button.styles';
// import { ButtonTestId } from '../lib/button.test';
import { ButtonProps } from '../model/button.types';

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <SButton {...props}>{children}</SButton>
);

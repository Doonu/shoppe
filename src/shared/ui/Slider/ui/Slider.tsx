import React, { FC } from 'react';
import { SSlider } from './Slider.styles';
import { SliderRangeProps } from 'antd/es/slider';

export const Slider: FC<SliderRangeProps> = ({ ...props }) => {
  return <SSlider {...props} />;
};

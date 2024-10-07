import React, { FC } from 'react';

import { SliderRangeProps } from 'antd/es/slider';

import { SSlider } from './Slider.styles';

export const Slider: FC<SliderRangeProps> = ({ ...props }) => <SSlider {...props} />;

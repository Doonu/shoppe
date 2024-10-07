import { Slider } from 'antd';
import styled from 'styled-components';

export const SSlider = styled(Slider)`
  &.ant-slider-handle .ant-slider-handle-2 {
    transform: translateX(0) !important;
  }

  & .ant-slider-handle::after {
    width: 0 !important;
    height: 10px !important;
    background-color: black;
    border: none;
    border-radius: 0;
    margin: 0 4px;
  }
`;

import { Drawer } from 'antd';
import styled from 'styled-components';

export const SDrawer = styled(Drawer).attrs({
  placement: 'right',
  width: '100%',
  forceRender: true,
})`
  & .ant-drawer-header {
    border-bottom: 0 !important;
  }

  .ant-drawer-content-wrapper:has(&) {
    max-width: ${({ theme }) => theme.breakpoints.maxMobile};
  }

  & .ant-drawer-body {
    padding: 0;
  }

  & .ant-drawer-header-title {
    justify-content: right;
  }

  & .ant-drawer-close {
    margin-inline-end: 0;
  }
`;

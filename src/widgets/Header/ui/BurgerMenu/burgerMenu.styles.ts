import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from 'antd';
import styled from 'styled-components';

export const SDrawer = styled(Drawer).attrs({
  placement: 'right',
  width: '100%',
  forceRender: true,
})`
  padding: 0 16px;

  & .ant-drawer-header {
    border-bottom: 0 !important;
    display: none;
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

export const SBurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
  width: 100%;
  height: ${({ theme }) => theme.size.headerS};
`;

export const SBurgerMenuCloseIcon = styled(FontAwesomeIcon).attrs(({ theme }) => ({
  color: theme.core.colorPrimary,
  size: '2xl',
}))``;

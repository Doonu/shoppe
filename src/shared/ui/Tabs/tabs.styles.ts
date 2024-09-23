import { Tabs } from 'antd';
import styled from 'styled-components';

export const STabs = styled(Tabs)`
  & .ant-tabs-nav-more {
    display: none;
  }

  &.ant-tabs-top > .ant-tabs-nav {
    margin: 0 !important;
    padding: 0;
  }

  &.ant-tabs-nav-list {
    height: 50px;
  }

  & .ant-tabs-tab {
    padding: 0;
  }
`;

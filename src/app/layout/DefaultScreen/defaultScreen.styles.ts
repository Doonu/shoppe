import { Layout } from 'antd';
import styled from 'styled-components';

export const SDefaultScreen = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.core.colorBackground};
`;

export const SLayout = styled(Layout)`
  display: grid;
  height: max-content;
  padding: 16px;
  background-color: inherit;
  max-width: ${({ theme }) => theme.breakpoints.maxDesktops};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    padding: 0 10px;
  }
`;

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  overflow: hidden;
  max-width: ${({ theme }) => theme.breakpoints.maxDesktops}px;
`;

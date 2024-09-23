import styled from 'styled-components';
import { Logo } from '@shared/assets';

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.maxDesktops};
  height: ${({ theme }) => theme.size.headerL};
  border-bottom: 1px solid ${({ theme }) => theme.core.colorAccentPrimary};
`;

export const SLogo = styled(Logo).attrs(({ theme }) => ({
  color: theme.core.colorPrimary,
}))`
  height: 70px;
`;

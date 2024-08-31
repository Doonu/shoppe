import styled from 'styled-components';

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0 0 0;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.maxDesktops};
  border-bottom: 1px solid ${({ theme }) => theme.core.colorSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.maxDesktops}) {
    padding: 60px 15px 0 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    padding: 30px 15px 0 15px;
    border-bottom: 0 solid ${({ theme }) => theme.core.colorSecondary};
  }
`;

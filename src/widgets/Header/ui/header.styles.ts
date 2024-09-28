import { BurgerMenu, Cart, Logo } from '@shared/assets';
import styled from 'styled-components';

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.maxDesktops};
  height: ${({ theme }) => theme.size.headerL};
  border-bottom: 1px solid ${({ theme }) => theme.core.colorAccentPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    height: ${({ theme }) => theme.size.headerS};
    border-bottom: 0 solid ${({ theme }) => theme.core.colorAccentPrimary};
  }
`;

export const SLogo = styled(Logo).attrs(({ theme }) => ({
  color: theme.core.colorPrimary,
}))`
  height: 70px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}) {
    height: max-content;
  }
`;

export const SBurgerMenuIcon = styled(BurgerMenu).attrs(({ theme }) => ({
  color: theme.core.colorPrimary,
}))``;

export const CartIcon = styled(Cart).attrs(({ theme }) => ({
  color: theme.core.colorPrimary,
}))``;

export const SStrippedMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

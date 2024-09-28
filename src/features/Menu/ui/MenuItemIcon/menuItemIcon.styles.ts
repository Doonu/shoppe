import styled from 'styled-components';

export const SMenuItem = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
`;

export const SDescription = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.core.colorPrimary};
`;

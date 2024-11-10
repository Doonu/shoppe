import { Image } from 'antd';
import styled from 'styled-components';

export const SProductCard = styled.div`
  display: grid;
`;

export const SImage = styled(Image)`
  border-radius: 10px;
`;

export const STitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 24px 0 16px 0;
`;

export const SPrice = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.core.colorSecondary};
`;

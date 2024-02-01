import styled from 'styled-components';
import { colors } from '../../../../theme/colors';

export const Container = styled.div`
  height: 60px;
  background: ${colors.backgroundSecondary};
  padding: 0 20px;

  display: flex;
  align-items: center;
`;

export const VisibleDuration = styled.p`
  flex: 1;
`;

export const RightCol = styled.div`
  display: flex;
  gap: 50px;
`;

export const TotalWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const TotalTitle = styled.p``;

export const TotalValue = styled.p`
  font-weight: bold;
`;

export const SwitchView = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const ViewName = styled.span``;

import styled from 'styled-components';
import { colors } from '../../../../../theme/colors';

export const Container = styled.div`
  height: 50px;

  display: flex;
  align-items: center;

  cursor: pointer;
  &:hover {
    background: ${colors.backgroundSecondary};
  }
`;
export const Title = styled.div`
  flex: 1;
`;
export const TimeWrapper = styled.div`
  display: flex;
  gap: 40px;
`;
export const TimeRange = styled.p``;
export const Time = styled.span``;
export const EndTime = styled.div``;
export const Duration = styled.div``;

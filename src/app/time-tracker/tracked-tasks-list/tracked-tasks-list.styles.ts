import styled from 'styled-components';
import { colors } from '../../../../theme/colors';

export const Container = styled.div`
  background: ${colors.backgroundSecondary};
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const SingleDayWrapper = styled.div`
  background: ${colors.backgroundPrimary};
  box-shadow: 0 0 10px 0 ${colors.boxShadow};
  padding: 0 40px;
`;

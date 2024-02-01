import styled from 'styled-components';
import { ButtonContainer } from '../common.styles';
import { colors } from '../../../../../theme/colors';

export const Container = styled(ButtonContainer)`
  width: 36px;
  height: 36px;

  &:hover {
    .hover-fill {
      fill: ${colors.playPlusButtonHover};
    }
  }
`;

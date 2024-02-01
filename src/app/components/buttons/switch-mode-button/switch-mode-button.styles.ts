import styled from 'styled-components';
import { ButtonContainer } from '../common.styles';
import { colors } from '../../../../../theme/colors';

export const PlayWrapper = styled(ButtonContainer)`
  &:hover {
    rect {
      fill: ${colors.modeButtonInactiveHover};
    }
  }
`;

export const AddWrapper = styled(ButtonContainer)`
  &:hover {
    svg {
      fill: ${colors.modeButtonInactiveHover};
    }
  }
`;

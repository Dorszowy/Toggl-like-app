import styled from 'styled-components';
import { colors } from '../../../../../theme/colors';

export const Container = styled.div`
  width: 200px;
  height: 75px;
  background: ${colors.playPlusButton};
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${colors.playPlusButtonHover};
  }
`;

export const ButtonText = styled.p`
  text-decoration: none;
  color: ${colors.backgroundPrimary};
  font-size: 22px;
`;

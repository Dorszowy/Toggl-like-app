import styled from 'styled-components';
import { colors } from '../../../../theme/colors';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1``;
export const Text = styled.p``;

export const Span = styled.span`
  font-weight: bold;
`;

export const Button = styled.button`
  border-radius: 25px;
  border: none;
  background: ${colors.playPlusButton};
  color: ${colors.backgroundPrimary};

  &:hover {
    background: ${colors.playPlusButtonHover};
  }
`;

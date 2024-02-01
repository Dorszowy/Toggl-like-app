import styled from 'styled-components';
import { colors } from '../../../../theme/colors';

export const Container = styled.div`
  height: 84px;
  padding: 0 20px;
  border-bottom: 1px solid ${colors.boxShadow};
  box-shadow: 0 0 10px 0 ${colors.boxShadow};

  display: flex;
  align-items: center;
  gap: 20px;
`;
export const Title = styled.input`
  padding: 0;
  border: none;
  height: 54.5px;
  flex: 1;

  &:focus {
    outline: none;
  }
`;

export const RightCol = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SwitchModeWrapper = styled.div`
  background-color: ${colors.modeButtonBackground};
  padding: 3px;
  border-radius: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

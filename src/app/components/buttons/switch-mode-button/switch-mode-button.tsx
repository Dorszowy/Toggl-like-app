import { colors } from '../../../../../theme/colors';
import { AddWrapper, PlayWrapper } from './switch-mode-button.styles';

interface Props {
  content: string;
}

export const SwitchModeButton = ({ content }: Props) => {
  return (
    <>
      {content === 'play' && (
        <PlayWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36">
            <g fill={colors.backgroundPrimary} fillRule="evenodd">
              <rect fill={colors.modeButtonInactive} width="36" height="36" rx="18"></rect>
              <path d="M13 11.994c0-1.101.773-1.553 1.745-.997l10.51 6.005c.964.55.972 1.439 0 1.994l-10.51 6.007c-.964.55-1.745.102-1.745-.997V11.994z"></path>
            </g>
          </svg>
        </PlayWrapper>
      )}
      {content === 'add' && (
        <AddWrapper>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={colors.modeButtonInactive}
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="12"></rect>
            <path fill={colors.backgroundPrimary} fillRule="evenodd" clipRule="evenodd" d="M5 11H19V13H5V11Z"></path>
            <path
              fill={colors.backgroundPrimary}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 5L13 19H11L11 5H13Z"
            ></path>
          </svg>
        </AddWrapper>
      )}
    </>
  );
};

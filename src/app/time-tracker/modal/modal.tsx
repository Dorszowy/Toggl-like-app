import React from 'react';
import ReactDOM from 'react-dom';
import { TimeEntryProps } from '@/app/state/time-entry-list/time-entry-list-slice';
import moment from 'moment';
import { Button, ModalContainer, ModalOverlay, Span, Text, Title } from './modal.styles';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  item: TimeEntryProps;
  startTime: string;
  endTime: string;
  timeOfCreation: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, item, startTime, endTime, timeOfCreation }) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Zatrzymaj propagację kliknięcia wewnątrz modala
  };

  return isOpen
    ? ReactDOM.createPortal(
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContainer>
            <Title>Task Title: {item.title || 'No title'}</Title>
            <Text>
              Start Time: <Span>{startTime}</Span>
            </Text>
            <Text>
              End Time: <Span>{endTime}</Span>
            </Text>
            <Text>
              Duration: <Span>{moment.utc(item.duration).format('HH:mm:ss')}</Span>
            </Text>
            <Text>
              Time of Creation: <Span>{timeOfCreation}</Span>
            </Text>
            <Button onClick={handleClose}>Close</Button>
          </ModalContainer>
        </ModalOverlay>,
        document.body
      )
    : null;
};

export default Modal;

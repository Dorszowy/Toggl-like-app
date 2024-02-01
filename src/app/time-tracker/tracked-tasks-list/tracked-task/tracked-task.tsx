import { TimeEntryProps } from '@/app/state/time-entry-list/time-entry-list-slice';
import { Container, Duration, Time, TimeRange, TimeWrapper, Title } from './tracked-task.styles';
import moment from 'moment';
import { useState } from 'react';
import Modal from '../../modal/modal';

interface TrackedTaskProps {
  item: TimeEntryProps;
  startTime: string;
  endTime: string;
}

const TrackedTask = ({ item, startTime, endTime }: TrackedTaskProps) => {
  const { title, duration, timeOfCreation } = item;
  const formattedDuration = moment.utc(duration).format('HH:mm:ss');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Container onClick={handleOpenModal}>
      <Title>{title || `no title`}</Title>
      <TimeWrapper>
        <TimeRange>
          <Time>{startTime}</Time> - <Time>{endTime}</Time>
        </TimeRange>
        <Duration>{formattedDuration}</Duration>
      </TimeWrapper>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          item={item}
          startTime={startTime}
          endTime={endTime}
          timeOfCreation={timeOfCreation.format('h:mm A')}
        />
      )}
    </Container>
  );
};

export default TrackedTask;

import moment from 'moment';
import { Container, Day, TotalTime } from './day-divider.styles';

interface DayDividerProps {
  date: string;
  totalDuration: number;
}

const DayDivider = ({ date, totalDuration }: DayDividerProps) => {
  const isToday = (dateString: string): boolean => {
    const today = new Date();
    const inputDate = new Date(dateString);

    return (
      today.getFullYear() === inputDate.getFullYear() &&
      today.getMonth() === inputDate.getMonth() &&
      today.getDate() === inputDate.getDate()
    );
  };

  const isYesterday = (dateString: string): boolean => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const inputDate = new Date(dateString);

    return (
      yesterday.getFullYear() === inputDate.getFullYear() &&
      yesterday.getMonth() === inputDate.getMonth() &&
      yesterday.getDate() === inputDate.getDate()
    );
  };

  let displayDay: string;
  if (isToday(date)) {
    displayDay = 'Today';
  } else if (isYesterday(date)) {
    displayDay = 'Yesterday';
  } else {
    const inputDate = new Date(date);
    displayDay = inputDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }

  const displayTotalDuration = moment.utc(totalDuration).format('HH:mm:ss');

  return (
    <Container>
      <Day>{displayDay}</Day>
      <TotalTime>{displayTotalDuration}</TotalTime>
    </Container>
  );
};

export default DayDivider;

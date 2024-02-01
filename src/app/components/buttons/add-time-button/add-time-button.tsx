import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../../../../theme/colors';
import { Container } from './add-time-button.styles';
import { addToDailyTotal } from '@/app/state/daily-total/daily-total-slice';
import { addToWeeklyTotal } from '@/app/state/weekly-total/weekly-total-slice';
import { RootState } from '@/app/state/store';
import { addEntryToList } from '@/app/state/time-entry-list/time-entry-list-slice';
import dayjs from 'dayjs';

interface Props {
  taskTime: number;
  taskTitle: string;
  setTaskTitle: (taskTitle: string) => void;
  startTime: dayjs.Dayjs;
  endTime: dayjs.Dayjs;
}

export const AddTimeButton = ({ taskTime, taskTitle, setTaskTitle, startTime, endTime }: Props) => {
  const dispatch = useDispatch();
  const entryList = useSelector((state: RootState) => state.timeEntryList.timeEntryList);

  const groupDay = startTime.toISOString().substring(0, 10);

  const payload = {
    id: entryList.length,
    title: taskTitle,
    dayToGroupBy: groupDay,
    startTime,
    endTime,
    duration: taskTime,
    timeOfCreation: dayjs(),
  };

  const handleAddTimeEntry = () => {
    dispatch(addEntryToList(payload));
    if (startTime.isSame(dayjs(), 'day')) dispatch(addToDailyTotal(taskTime));
    if (startTime.isSame(dayjs(), 'week')) dispatch(addToWeeklyTotal(taskTime));
    setTaskTitle('');
  };

  return (
    <Container onClick={handleAddTimeEntry}>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <g fill="none" fillRule="evenodd">
          <rect className="hover-fill" width="36" height="36" fill={colors.playPlusButton} rx="18"></rect>
          <rect width="4" height="20" x="16" y="8" fill={colors.backgroundPrimary} rx="1.5"></rect>
          <rect width="20" height="4" x="8" y="16" fill={colors.backgroundPrimary} rx="1.5"></rect>
        </g>
      </svg>
    </Container>
  );
};

import { Arrow } from '@/app/components/icons/arrow/arrow';
import { DateTimePicker } from '@mui/x-date-pickers';
import { Container, RightCol, SwitchModeWrapper, Title } from './form.styles';
import { AddTimeButton, SwitchModeButton } from '@/app/components/buttons';
import dayjs from 'dayjs';
import { useState } from 'react';

const Form = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [startTime, setStartTime] = useState<any>(dayjs());
  const [endTime, setEndTime] = useState<any>(dayjs());

  const taskTime = endTime.diff(startTime);

  const startTimeDay =
    dayjs().date() === startTime.date() && dayjs().month() === startTime.month() && dayjs().year() === startTime.year()
      ? '[Today]'
      : 'dddd';

  const startTimeFormat = `h:mm A ${startTimeDay}`;
  const endTimeFormat = 'h:mm A';

  const handleTaskTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
  };
  const handleStartInputChange = (newValue: Date | null | undefined) => {
    setStartTime(newValue);
  };
  const handleEndInputChange = (newValue: Date | null | undefined) => {
    setEndTime(newValue);
  };

  return (
    <Container>
      <Title type="text" placeholder="What have you done?" value={taskTitle} onChange={handleTaskTitleChange} />
      <RightCol>
        <DateTimePicker
          label="Start Time"
          format={startTimeFormat}
          defaultValue={startTime}
          onChange={handleStartInputChange}
        />
        <Arrow />
        <DateTimePicker
          label="End Time"
          format={endTimeFormat}
          defaultValue={endTime}
          onChange={handleEndInputChange}
        />
        <AddTimeButton
          taskTime={taskTime}
          taskTitle={taskTitle}
          setTaskTitle={setTaskTitle}
          startTime={startTime}
          endTime={endTime}
        />
        <SwitchModeWrapper>
          <SwitchModeButton content="play" />
          <SwitchModeButton content="add" />
        </SwitchModeWrapper>
      </RightCol>
    </Container>
  );
};

export default Form;

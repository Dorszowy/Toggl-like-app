'use client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Form from './form/form';
import TimeSummary from './summary/time-summary';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import TrackedTasksList from './tracked-tasks-list/tracked-tasks-list';

const TimeTrackerPage = () => {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Form />
        <TimeSummary />
        <TrackedTasksList />
      </LocalizationProvider>
    </Provider>
  );
};

export default TimeTrackerPage;

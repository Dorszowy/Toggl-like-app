import { configureStore } from '@reduxjs/toolkit';
import dailyTotalReducer from './daily-total/daily-total-slice';
import weeklyTotalReducer from './weekly-total/weekly-total-slice';
import timeEntryListReducer from './time-entry-list/time-entry-list-slice';

export const store = configureStore({
  reducer: {
    dailyTotal: dailyTotalReducer,
    weeklyTotal: weeklyTotalReducer,
    timeEntryList: timeEntryListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

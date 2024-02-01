import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type TimeEntryProps = {
  id: number;
  title: string;
  dayToGroupBy: string;
  startTime: any;
  endTime: any;
  duration: number;
  timeOfCreation: any;
};

interface TimeEntryListSlice {
  timeEntryList: TimeEntryProps[];
}

const initialState: TimeEntryListSlice = {
  timeEntryList: [],
};

const timeEntryListState = createSlice({
  name: 'time entry list',
  initialState,
  reducers: {
    addEntryToList: (state, action: PayloadAction<TimeEntryProps>) => {
      state.timeEntryList.push(action.payload);
    },
  },
});

export const { addEntryToList } = timeEntryListState.actions;
export default timeEntryListState.reducer;

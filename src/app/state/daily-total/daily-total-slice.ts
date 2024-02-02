import { createSlice } from '@reduxjs/toolkit';

interface DailyTotalState {
  value: number;
}

const initialState: DailyTotalState = {
  value: 0,
};

const dailyTotalSlice = createSlice({
  name: 'daily total',
  initialState,
  reducers: {
    addToDailyTotal: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addToDailyTotal } = dailyTotalSlice.actions;
export default dailyTotalSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

interface WeeklyTotalState {
  value: number;
}

const initialState: WeeklyTotalState = {
  value: 0,
};

const weeklyTotalState = createSlice({
  name: 'weekly total',
  initialState,
  reducers: {
    addToWeeklyTotal: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addToWeeklyTotal } = weeklyTotalState.actions;
export default weeklyTotalState.reducer;

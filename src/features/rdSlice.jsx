import { createSlice } from '@reduxjs/toolkit';

const rdSlice = createSlice({
  name: 'rd',
  initialState: [],
  reducers: {
    addRD: (state, action) => {
      state.push(action.payload);
    },
    updateContribution: (state, action) => {
      const rd = state.find(rd => rd.id === action.payload.id);
      if (rd) {
        rd.contribution += action.payload.amount;
      }
    }
  }
});

export const { addRD, updateContribution } = rdSlice.actions;
export default rdSlice.reducer;

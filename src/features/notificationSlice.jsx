import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: [],
  reducers: {
    addNotification: (state, action) => {
      state.push({ message: action.payload, time: new Date().toLocaleTimeString() });
    },
    clearNotifications: () => []
  }
});

export const { addNotification, clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;

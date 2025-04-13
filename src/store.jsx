import { configureStore } from '@reduxjs/toolkit';
import fdReducer from './features/fdSlice';
import rdReducer from './features/rdSlice';
import notificationReducer from './features/notificationSlice';

const store = configureStore({
  reducer: {
    fd: fdReducer,
    rd: rdReducer,
    notification: notificationReducer,
  },
});

export default store;

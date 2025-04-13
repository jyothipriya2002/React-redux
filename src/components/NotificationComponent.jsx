import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotifications } from '../features/notificationSlice';

const NotificationComponent = () => {
  const notifications = useSelector(state => state.notification);
  const dispatch = useDispatch();

  return (
    <div>
    
      <button onClick={() => dispatch(clearNotifications())}>Clear</button>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note.time} - {note.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationComponent;

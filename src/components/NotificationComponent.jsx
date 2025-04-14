

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearNotifications } from '../features/notificationSlice';

const NotificationComponent = () => {
  const notifications = useSelector(state => state.notification);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow" style={{ boxShadow: '0 0 10px rgba(173, 216, 230, 0.5)' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-primary">Notifications</h4>
          <button className="btn btn-danger btn-sm" onClick={() => dispatch(clearNotifications())}>
            Clear All
          </button>
        </div>
        {notifications.length === 0 ? (
          <div className="text-muted">No notifications available.</div>
        ) : (
          <ul className="list-group">
            {notifications.map((note, index) => (
              <li key={index} className="list-group-item">
                <strong>{note.time}</strong> - {note.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NotificationComponent;


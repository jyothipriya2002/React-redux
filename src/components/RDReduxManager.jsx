
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRD, updateContribution } from '../features/rdSlice';
import { addNotification } from '../features/notificationSlice';

const RDReduxManager = () => {
  const [contribution, setContribution] = useState('');
  const rdList = useSelector(state => state.rd);
  const dispatch = useDispatch();

  const handleAddRD = () => {
    const id = Date.now().toString();
    dispatch(addRD({ id, contribution: Number(contribution) }));
    dispatch(addNotification(`RD with ₹${contribution} added.`));
    setContribution('');
  };

  const adjustContribution = (id, delta) => {
    dispatch(updateContribution({ id, amount: delta }));
    dispatch(addNotification(`Contribution updated for RD ID ${id}.`));
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow" style={{ boxShadow: '0 0 10px rgba(173, 216, 230, 0.5)' }}>
        <h3 className="mb-4 text-primary">RD Manager</h3>
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              placeholder="Monthly Contribution"
              value={contribution}
              onChange={e => setContribution(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary w-100" onClick={handleAddRD}>Add RD</button>
          </div>
        </div>

        <ul className="list-group">
          {rdList.map(rd => (
            <li
              key={rd.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                ₹{rd.contribution}
              </div>
              <div>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => adjustContribution(rd.id, 100)}
                >
                  +100
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => adjustContribution(rd.id, -100)}
                >
                  -100
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RDReduxManager;

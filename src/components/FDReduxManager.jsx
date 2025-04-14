import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFD, markMatured } from '../features/fdSlice';
import { addNotification } from '../features/notificationSlice';

const FDReduxManager = () => {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [rate, setRate] = useState('');
  const fdList = useSelector(state => state.fd);
  const dispatch = useDispatch();

  const handleAddFD = () => {
    const id = Date.now().toString();
    dispatch(addFD({ id, amount, tenure, rate }));
    dispatch(addNotification(`FD of ₹${amount} added.`));
    setAmount('');
    setTenure('');
    setRate('');
  };

  const handleMature = (id) => {
    dispatch(markMatured(id));
    dispatch(addNotification(`FD with ID ${id} marked as matured.`));
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow" style={{ boxShadow: '0 0 40px rgba(173, 216, 230, 0.5)' }}>
        <h3 className="mb-4 text-primary">FD Manager</h3>

        {/* Stacked input fields */}
        <div className="mb-3">
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Enter Fixed Deposit Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Enter Tenure in Months"
            value={tenure}
            onChange={e => setTenure(e.target.value)}
          />
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Enter Interest Rate"
            value={rate}
            onChange={e => setRate(e.target.value)}
          />
        </div>

        <button className="btn btn-primary mb-4" onClick={handleAddFD}>Add FD</button>

        <ul className="list-group">
          {fdList.map(fd => (
            <li
              key={fd.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                ₹{fd.amount} for {fd.tenure} months @ {fd.rate}% - <strong>{fd.status}</strong>
              </div>
              {fd.status === 'Active' && (
                <button className="btn btn-sm btn-success" onClick={() => handleMature(fd.id)}>
                  Mark Matured
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FDReduxManager;


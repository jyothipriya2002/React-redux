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
  };

  const handleMature = (id) => {
    dispatch(markMatured(id));
    dispatch(addNotification(`FD with ID ${id} marked as matured.`));
  };

  return (
    <div>
      <h3>FD Manager</h3>
      <input placeholder="Amount" onChange={e => setAmount(e.target.value)} />
      <input placeholder="Tenure (months)" onChange={e => setTenure(e.target.value)} />
      <input placeholder="Interest Rate" onChange={e => setRate(e.target.value)} />
      <button onClick={handleAddFD}>Add FD</button>

      <ul>
        {fdList.map(fd => (
          <li key={fd.id}>
            ₹{fd.amount} for {fd.tenure} months @ {fd.rate}% - {fd.status}
            {fd.status === 'Active' && (
              <button onClick={() => handleMature(fd.id)}>Mark Matured</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FDReduxManager;

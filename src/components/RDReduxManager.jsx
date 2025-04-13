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
  };

  const adjustContribution = (id, delta) => {
    dispatch(updateContribution({ id, amount: delta }));
    dispatch(addNotification(`Contribution updated for RD ID ${id}.`));
  };

  return (
    <div>
      <h3>RD Manager</h3>
      <input placeholder="Monthly Contribution" onChange={e => setContribution(e.target.value)} />
      <button onClick={handleAddRD}>Add RD</button>

      <ul>
        {rdList.map(rd => (
          <li key={rd.id}>
            ₹{rd.contribution}
            <button onClick={() => adjustContribution(rd.id, 100)}>+100</button>
            <button onClick={() => adjustContribution(rd.id, -100)}>-100</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RDReduxManager;

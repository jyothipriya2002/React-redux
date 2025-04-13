// src/App.jsx
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Optional for extra styling
import Dashboard from './components/DashboardView';

const App = () => {
  return (
    <div>
     <Dashboard/>
    </div>
  );
};

export default App;

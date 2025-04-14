// import React from 'react';
// import FDReduxManager from './FDReduxManager';
// import RDReduxManager from './RDReduxManager';
// import NotificationComponent from './NotificationComponent';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Dashboard = () => {
//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">Investment and Notification Dashboard</h2>

//       <div className="row g-4 justify-content-center">
//         {/* FD Manager */}
//         <div className="col-md-4">
//           <div className="card h-100 shadow p-3" style={{ minHeight: '360px' }}>
//             <h4>Fixed Deposit Manager</h4>
//             <FDReduxManager />
//           </div>
//         </div>

//         {/* RD Manager */}
//         <div className="col-md-4">
//           <div className="card h-100 shadow p-3" style={{ minHeight: '360px' }}>
//             <h4>Recurring Deposit Manager</h4>
//             <RDReduxManager />
//           </div>
//         </div>

//         {/* Notifications */}
//         <div className="col-md-4">
//           <div className="card h-100 shadow p-3" style={{ minHeight: '360px' }}>
//             <h4>Notifications</h4>
//             <NotificationComponent />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';
import FDReduxManager from './FDReduxManager';
import RDReduxManager from './RDReduxManager';
import NotificationComponent from './NotificationComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Investment and Notification Dashboard</h2>

      <div className="row g-4 justify-content-center">
        {/* FD Manager */}
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="card h-100 shadow p-3" style={{ minHeight: '360px' }}>
            <h4>Fixed Deposit Manager</h4>
            <FDReduxManager />
          </div>
        </div>

        {/* RD Manager */}
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="card h-100 shadow p-3" style={{ minHeight: '360px' }}>
            <h4>Recurring Deposit Manager</h4>
            <RDReduxManager />
          </div>
        </div>

        {/* Notifications */}
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="card h-100 shadow p-3" style={{ minHeight: '360px' }}>
            <h4>Notifications</h4>
            <NotificationComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

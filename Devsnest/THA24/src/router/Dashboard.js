import React, { useContext } from 'react';
import { Context } from '../context/AuthContext';
import { Route, Redirect } from 'react-router-dom';

function Dashboard() {
  const logger = useContext(Context);

  return (
    <div>
      <Route>
        {logger.logIn ? (
          <div className="dashboard">
            <h1>Dashboard</h1> <p>Welcome to Dashboard!</p>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </Route>
    </div>
  );
}

export default Dashboard;

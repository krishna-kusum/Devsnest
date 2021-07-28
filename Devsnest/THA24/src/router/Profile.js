import React, { useContext } from 'react';
import { Context } from '../context/AuthContext';
import { Route, Redirect } from 'react-router-dom';

function Profile() {
  const logger = useContext(Context);

  return (
    <div >
      <Route>
        {logger.logIn ? (
          <div className="profile">
            <h1>Profile</h1> <p>Welcome to your Profile!</p>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </Route>
    </div>
  );
}

export default Profile;

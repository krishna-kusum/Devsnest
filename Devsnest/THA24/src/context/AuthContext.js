import React, { useState } from 'react';

export const Context = React.createContext();

const wait = time => {
  return new Promise( (resolve) => {
    setTimeout(resolve, time)
  }
  );
};

function AuthContext({ children }) {
  const [logIn, setLogIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const logger = {
    logIn: logIn,
    loading: loading,
    logging: () => {
      setLoading(true);
      wait(1000).then(
        () => {
          setLogIn(true)
          setLoading(false)
        }
      );
    },
    logOut: () => {
      setLoading(true);
      wait(1000).then(
        () => {
          setLogIn(false)
          setLoading(false)
        }
      );
    }
    
  };

  return <Context.Provider value={logger}>{children}</Context.Provider>;
}

export default AuthContext;

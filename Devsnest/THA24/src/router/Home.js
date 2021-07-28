import React, { useContext } from 'react';
import {Context} from '../context/AuthContext'

function Home() {

  const logger = useContext(Context);
  // const toggleLogin = ()=> {
  //   logger.toggleLogin();
  // }

  return (
    <div className="home">
      <h1>Home</h1>
      <div>Please Login To access dashboard and Profile </div>
      {
        logger.loading ? <p>loading...</p> : 
        logger.logIn ? <button onClick={logger.logOut}>Log Out</button>  : <button onClick={logger.logging}>Log In</button>
      
      }
    </div>
  );
}

export default Home;

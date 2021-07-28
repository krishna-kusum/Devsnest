import React, {useContext} from 'react';
import {Context} from '../context/AuthContext'

function About() {

  const logger = useContext(Context);


  return (
    <div className = "about">
      <h1>About</h1>
      <div>{logger.logIn ? "You are Logged In" : "You are Logged Out!"}</div> 
    </div>
  );
}

export default About;

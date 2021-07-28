import React from 'react';
import './style.css';
import DocTitleOne from './Components/DocTitleOne';
import DocTitleTwo from './Components/DocTitleTwo';
import UserForm from './Components/UserForm';
import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';

export default function App() {
  return (
    <div className={App}>
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}

      {/* <UserForm /> */}

      <CounterOne/>
      <CounterTwo/>

    </div>
  );
}

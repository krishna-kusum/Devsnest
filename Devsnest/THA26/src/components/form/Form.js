import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateFirstNameInput,
  updateLastNameInput
} from '../../redux/userForm/userFormActions';

const Form = () => {
  const firstName = useSelector(state => state.firstName);
  const lastName = useSelector(state => state.lastName);
  // console.log(state)

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Form </h2>
      <form action="" className = "form">
        First Name :{' '}
        <input
          type="text"
          value={firstName}
          onChange={e => dispatch(updateFirstNameInput(e.target.value))}
        />
        Last Name :{' '}
        <input
          type="text"
          value={lastName}
          onChange={e => dispatch(updateLastNameInput(e.target.value))}
        />
      </form>
      <div>
        <h3>Output</h3>
        <p>First Name :{firstName}</p>
        <p>Last Name :{lastName}</p>
      </div>
    </div>
  );
};

export default Form;

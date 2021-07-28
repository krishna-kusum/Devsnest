import React,{useState} from 'react'
import useInput from '../Hooks/useInput'
const UserForm = () => {

  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  }

  return(
    <div>
      <form onSubmit = {submitHandler}>
        <div>
        <label>First Name</label>
        <input type = "text" {...bindFirstName} placeholder = "Enter first Name" />
        </div>
        <div>
        <label>Last Name</label>
        <input type = "text" {...bindLastName} placeholder = "Enter last Name" />
        </div>
        <div>
        <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default UserForm;
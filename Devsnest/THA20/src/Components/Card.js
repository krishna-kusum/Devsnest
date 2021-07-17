import React from 'react';

const Card = (props) => {

  const {id, food, calorie, state, setState } = props;
  // console.log(setState)

  const clickHandler = () => {
    console.log(id)
    let newState = state.filter((element)=>
      element.id !== id
    )
    setState(newState)
  }

  return (
    <div className="container">
      <div className="card">
        <div className = "title">
        <h3>{food}</h3>
        <button onClick={clickHandler}>Delete</button>
        </div>
        <p>You consumed {calorie} cals today.</p>
        
      </div>
      
    </div>
  );
};

export default Card;
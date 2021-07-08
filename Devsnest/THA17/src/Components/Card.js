import React from 'react';

const Card = ({ food, calorie }) => {
  return (
    <div className="container">
      <div className="card">
        <h3>{food}</h3>
        <p>You consumed {calorie} cals today.</p>
      </div>
    </div>
  );
};

export default Card;

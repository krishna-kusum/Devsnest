import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLocation, updateLocData } from '../actions';

const Form = () => {
  const location = useSelector(state => state.location);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 form">
          <input
            type="text"
            value={location}
            placeholder="Enter City Name..."
            onChange={e => {
              // setLocation(e.target.value);
              dispatch(updateLocation(e.target.value));
            }}
          />
          <button
            className="btn btn-dark"
            onClick={() => {
              dispatch(updateLocData(location));
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

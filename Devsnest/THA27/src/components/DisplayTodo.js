import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../redux/actions';

function DisplayTodo() {
  const todos = useSelector(state => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="display card">
      {todos.map((todo, index) => (
        <div key={index} className="box">
          <h5 style={{ display: 'inline-block' }}>{todo.title}</h5>
          <button
            onClick={() => {
              dispatch(deleteItem(index));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default DisplayTodo;

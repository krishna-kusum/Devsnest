import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, clearData, loadData } from '../redux/actions';

function AddTodo() {
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add a Todo..."
        value={item}
        onChange={e => {
          setItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (item == '') {
            alert('Todo cannot be empty.');
            return;
          }
          dispatch(
            addItem({
              title: item,
              done: false
            })
          );
          setItem('');
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch(clearData());
        }}
      >
        Clear
      </button>
      <button
        onClick={() => {
          dispatch(loadData());
        }}
      >
        Load Data
      </button>
    </div>
  );
}

export default AddTodo;

import React from 'react';
import './style.css';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To-Do List</h1>
        <AddTodo />
        <DisplayTodo />
      </div>
    </Provider>
  );
}

import React from 'react';
import './style.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Form from './components/form/Form';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Form />
      </div>
    </Provider>
  );
}

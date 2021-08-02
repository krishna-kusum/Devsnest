import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Form from './components/Form';
import Card from './components/Card';

export default function App() {
  return (
    <div>
      {/* <h1>Hello Weather !</h1> */}
      <div className="container">
        <div className="row">
          <div className="col heading">Weather Forecaster</div>
        </div>
      </div>
      <Form />
      <Card />
    </div>
  );
}

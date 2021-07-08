import React from 'react';
import './style.css';
import Card from './Components/Card';

export default function App() {
  return (
    <div className="container">
      <div>
        {' '}
        <h1> Calorie Chart </h1>
      </div>
      <div className="App">
        <Card food="Pizza" calorie="56" />
        <Card food = "Burger" calorie = "69"/>
        <Card food= "Coke" calorie = "500"/>
        <Card food = "Brownie" calorie = "180"/>
        <Card food = "Fried Rice" calorie = "90"/>
        <Card food = "Lassania" calorie = "200"/>
        <Card food = "Pani-puri" calorie = "10"/>

      </div>
    </div>
  );
}

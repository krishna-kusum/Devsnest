import React,{useState} from 'react';
import './style.css';
import data from './Components/data.json'
import Card from './Components/Card';

export default function App() {

  const [state,setState] = useState(data)

  
  return (
    <div className="container">
      <div>
        {' '}
        <h1> Calorie Chart </h1>
      </div>
      <div className="App">

        {
          state.length > 0 ? state.map((element)=> {
            return(
              <Card key = {element.id} id = {element.id} food = {element.food} calorie = {element.cals} state = {state} setState = {setState} />
            )
         }) : <p style = {{fontStyle : `bold`, fontSize : `20px`}}> No Items Left </p>
          
        }

        {/* <Card food="Pizza" calorie="56" />
        <Card food = "Burger" calorie = "69"/>
        <Card food= "Coke" calorie = "500"/>
        <Card food = "Brownie" calorie = "180"/>
        <Card food = "Fried Rice" calorie = "90"/>
        <Card food = "Lassania" calorie = "200"/>
        <Card food = "Pani-puri" calorie = "10"/> */}

      </div>
    </div>
  );
}


import React from "react";
import "./style.css";
import Card from './Component/Card'

export default function App() {
  
  /*
    const card = document.querySelector('.card')
    let list =[];
    var i;
    for(i = 0; i< 64; i++){
      let box = document.createElement("div");
      box.className = "box";
      card.appendChild(box)
    }
  */
  
  
  
  return (
    <div className = "App">
      <Card />
    </div>
  );
}

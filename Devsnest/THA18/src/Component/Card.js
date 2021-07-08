import React from 'react';

function Card() {
  const card = document.querySelector('.card');
  let list = [];
  let i;
  for (let i = 1; i < 9; i++) {
    /* const box = document.createElement("div");
      box.classList.add('box');
      card.appendChild(box);*/
      
    for(let j = 1; j< 9; j++){
      let k = i+j;
      let tileColor;
      if(k%2 == 0){
         
      list.push(<div className="box white" />);

      } else{
        
      list.push(<div className="box black" />);

      }
      
    }
  }

  return <div className="card">{list}</div>;
}

export default Card;

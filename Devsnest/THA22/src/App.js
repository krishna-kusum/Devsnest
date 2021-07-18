import React,{useEffect, useState} from "react";
import "./App.css"
import Templates from './Components/Templates'
import Meme from './Components/Meme'


export default function App() {

  const [templates, setTemplates] = useState([])
  const [meme, setMeme] = useState(null);

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then((data) => {
      setTemplates(data.data.memes);
      // console.log(data.data.memes)
    });
  }, []);

  return (
    <div className = "App">
      <h1>Meme Generator</h1>
      {meme === null ?  <Templates templates = {templates} setMeme={setMeme}  /> : <Meme meme = {meme} setMeme = {setMeme}/>}
   
    </div>
  );
}

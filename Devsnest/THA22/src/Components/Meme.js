import React,{useState} from 'react'

const Meme = (props)=>{

  const {meme, setMeme} = props;
  
  const [form, setForm] = useState({
    template_id : meme.id,
    username : "kusum",
    password : "asdfhjkl",
    boxes : [],
  })

  
  // console.log(meme.url)

  const generateMeme = () =>{

    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;

form.boxes.map((box,index)=>{
  url += `&boxes[${index}][text]=${box.text}`;
})

fetch(url)
  .then(res => res.json())
  .then((data) => {
    setMeme({...meme, url: data.data.url});
  });


// console.log(url)
  }

  return(
    
<div className = "meme">
 
 <img src = {meme.url} alt = ""/>
 <div className = "input">
   {
     [...Array(meme.box_count)].map((_, index) => (
<input key = {index} type = "text" placeholder = {` Meme Caption ${index + 1}`} onChange = {(e)=>{
  const newBoxes = form.boxes; 
  newBoxes[index] = {text : e.target.value};
  setForm({...form, boxes : newBoxes});
}} />
     ))
     }
   </div>
   <div> 
<button onClick = {generateMeme}>Generate Meme</button>
<button onClick = {()=> {setMeme(null)}}>Choose Template</button>
    </div>
  </div>
  )
}

export default Meme;
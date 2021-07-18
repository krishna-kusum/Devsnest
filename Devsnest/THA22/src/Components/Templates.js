import React from 'react'

const Templates = (props) =>{

  const {templates , setMeme} = props;
  
  return (<div className="templates">
  {
    templates.map((template)=>{
      // console.log("hi");
      return(
        <div key={template.id} className = "template" onClick = {()=>{
          setMeme(template)
        }}>
          <div style = {{backgroundImage: `url(${template.url})`, backgroundColor : "blue"}} className = "image"></div>
        {/* {template.name} */}
      </div>
      )
    })
  }
   </div>)
}

export default Templates;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Styless/Newcomp1.css'


export default function Newcomp1(props) {
  // n =0;
  const handleCLick = ()=>{
     // n++; // A variable outside setState cant be used inside it
     settimes(times +1)
      settext(text + "New text added ");
  }
  
 
  const HandleonChange =(event)=>{
    settext(event.target.value); // This syntax means text is updated to whatever the value is in the text area;
    // onchange function is called whenever value in textarea is changed
     NoWords();
     console.log( "Textwords "+NoWords());
  }

  const Capitalizetext = ()=>{
     settext(text.toUpperCase());
  } 
  const makelowercase = ()=>{
    settext(text.toLowerCase());
  }
  
  const clear = ()=>{
    settext("")
  }

  

  const NoWords = ()=>{
    let words = 0;
    for(let i=0;i<text.length;i++){
      if(text[i] === " "){
        words++;
      }
      
    }
    return words;
    

  }

  //const 

  const [text,settext] = useState("");
  const [times,settimes] = useState(0);

  const [btnStyle,setbtnStyle] = useState({
    margin: '4px 4px',
    backgroundColor: 'cyan',
    border:'1px solid red',
    borderRadius: '40px'
  });
 
 


    

  // HTML Starts Here
  return (
    <div id = "newcomp1">
       
       This is new component {props.name}
       <br />

       <textarea name="" id="" cols="30" rows="3" value = {text} onChange={HandleonChange} style = {props.txtboxstyle} >
        
       </textarea>
       <br />
       Button was clicked {times} times
      
       <br />
       <div className="c1btns">
       <button className="c1b1" onClick = {handleCLick}  >
        CLick Me
       </button>    

       <button className="c1b2" onClick = {Capitalizetext}  >
        Capitalize
       </button>     

       <button id="c1b3" onClick = {makelowercase}  >
        MakeLowerCase
       </button>

       <button id="c1b4" onClick = {clear}  >
        Clear
       </button>

       </div>
       
       <br />
       Summary:
       No of words: {NoWords()}
       
       <div id="preview" style={props.txtboxstyle}>
        <p><h4><u>Preview</u></h4></p>
        <p>{text}</p>
       </div>
       <br />
       <br />
    </div>
  )
  }


Newcomp1.propTypes = {
    name: PropTypes.string.isRequired,
};
Newcomp1.defaultProps = {
    name: 'defaultname'
}
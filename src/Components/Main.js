import React from 'react'
import Newcomp1 from './Newcomp1';
import { useState } from 'react';
export default function Main() {

    const [login,setlogin] =useState(false);
  const sub = ()=>{
    setlogin(true);
  }
  const HandleLogout = ()=>{
    setlogin(false);
  }

 // DarkMode states and handlers
 const [modeStyle,setmodeStyle] = useState({
  color:'black',
  backgroundColor: 'white'
 });
 
 const [btntext, setbtntext] = useState("Dark Mode");


 const handleMode = ()=> {
     if(modeStyle.color === 'black'){
      setmodeStyle({
        color: 'white',
        backgroundColor: 'black'
        
      });
      document.body.style.backgroundColor = 'black';
      setbtntext("Light Mode");
     }else{
      setmodeStyle({
        color:'black',
      backgroundColor: 'white'
      }
        )
        document.body.style.backgroundColor = 'white'
        setbtntext("Dark Mode");
     }
 }

 // Color modes
 //const [Mode, setMode] = useState('default light');
 const [bgstyle,setBgstyle] = useState({
  color: 'white',
  backgroundColor: 'black'
 })


 const changeMode = (event3)=>{

    const bgcolor = event3.target.value;
    // console.log(bgcolor);
    const bgRGB = colorToRgb(bgcolor);
    const textcolor = bgRGB.r<127&&bgRGB.g<127&&bgRGB.b<127 ? 'white':'black';
    const bordercolor = textcolor;
    
    setBgstyle({
      color: 'black',
      backgroundColor: `${bgcolor}`,
      color: `${textcolor}`
    });
    

    setTbStyle({
      backgroundColor: `${bgcolor}`,
      color: `${textcolor}`,
      border: `border: 2px solid ${bordercolor}`
    })

 }

 const [tboxStyle,setTbStyle] = useState(
  {
    color: 'black',
    backgroundColor:'white',
    border: '2px solid black'

  }
);

// ------------COLOR MODIFICATION FUNCTION-------------------------------------------------//
const colorToRgb = (color) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return { r, g, b };
};

const rgbToColor = (rgb) => {
  const rHex = rgb.r.toString(16).padStart(2, '0'); //the RGB values (rgb.r, rgb.g, rgb.b) are converted to hexadecimal strings using the toString(16) method ;
  const gHex = rgb.g.toString(16).padStart(2, '0'); //he padStart(2, '0') method is used to ensure that each component has a minimum of two digits, padding with '0' if necessary. 
  const bHex = rgb.b.toString(16).padStart(2, '0');
  return `#${rHex}${gHex}${bHex}`;
};

const darkenColor = (color, amount) => {
  // Convert the color to RGB values
  const rgb = colorToRgb(color);

  // Apply the darkness amount to each RGB component
  const darkenedRgb = {
    r: rgb.r - amount,
    g: rgb.g - amount,
    b: rgb.b - amount,
  };

  // Convert the modified RGB values back to a color string
  const modifiedColor = rgbToColor(darkenedRgb);

  return modifiedColor;
};

const lightenColor = (color, amount) => {
  // Convert the color to RGB values
  const rgb = colorToRgb(color);

  // Apply the darkness amount to each RGB component
  const darkenedRgb = {
    r: rgb.r + amount,
    g: rgb.g + amount,
    b: rgb.b + amount,
  };

  // Convert the modified RGB values back to a color string
  const modifiedColor = rgbToColor(darkenedRgb);

  return modifiedColor;
};

// ---------------------------------------------------------------// -------------------------------------------------------------------------''
const [btnStyle,setbtnStyle] = useState({
  margin: '4px 4px',
  backgroundColor: 'cyan',
  border:'1px solid red',
  borderRadius: '40px'
});


  return (
    <div>
      <h3>  Welcome to My text Editior  </h3>
                  <br />
                  Change Color: 
                  <input type="color" name="Background:" id="bg" onChange={changeMode} style={btnStyle} />
                  <br />
                     Hello World
                  <Newcomp1 name = "Comp1" onlogout = {HandleLogout} txtboxstyle = {tboxStyle} btnstyle = {btnStyle}/>
    </div>
  )
}

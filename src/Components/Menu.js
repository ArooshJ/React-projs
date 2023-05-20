import React from 'react';
import './Styless/Menu.css';
import { Link } from 'react-router-dom';
export default function Menu(props) {
  return (
    <div className='Menu' style={props.display}>
        <div id = "menutitle" onClick={props.mclick}> 
         <b>Menu</b>
        </div>
        <div className="options" id="option1" onClick={props.mclick}><Link to ="/">Home</Link></div>
        <div className="options" id="option2" onClick={props.mclick}><Link to ="/TextEditor">TextEditor</Link></div>
        <div className="options" id="option3" onClick={props.mclick}><Link to ="/VConnect">VConnect</Link></div>
        <div className="options" id="option4" onClick={props.mclick}><Link to ="/Library">Library</Link></div>
        <div className="options" id="option5" onClick={props.mclick}><Link to ="/Jobs">Jobs</Link></div>
        <div className="options" id="option6" onClick={props.mclick}><Link to ="/Quiz">Quiz</Link></div>
        
        <div className="options"> Change Color: 
           <input type="checkbox" name="" id="Change?" onChange={props.checkb}/>
           <input type="color" name="Background:" id="bg" onChange={props.mode} style={props.bgstyle} />
        </div>

        <button id ="Logoutmenu" onClick={props.onlogout}>LogOut</button>
    </div>
  )
}

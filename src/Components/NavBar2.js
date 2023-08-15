import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Styless/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default class NavBar2 extends Component {
 
  render() {
    const{ mode,appstyle,tbstyle,checkb,onlogout,menu,topstyle,navstyle,loggedAcc} = this.props;
    

    return (
      <div id='top' style= {this.props.topstyle} >
        <div className="main" id="outlogo">
              <div className="main" id="logo">
                  <h2>
                      <div id="logo1">M</div>
                      <div id="logo2">y</div>
                      <div id="logo3">S</div>
                      <div id="logo4">i</div>
                      <div id="logo5">t</div>
                      <div id="logo6">E</div>
                      <div id="logo7"></div>               
                  </h2>
                  <div id="inlogo">
                     
                  </div>
              </div>
          </div>
          
          
          <div className="main" id="navbar"  >
               <Link to ="/"> Home </Link>
               <Link to="/TextEditor"> TextEditor </Link>
               {/* <Link to="#"> VLabs </Link> */}
               <Link to= "/VConnect"> VConnect  </Link>
               {/* <Link to= "#"> Lectures  </Link> */}
               <Link to="/Library"> Library  </Link>
               {/* <Link to="#"> Internships  </Link> */}
               <Link to="/News"> News  </Link>
               {/* <Link to="#"> Doubt-Center </Link> */}
               <Link to="/Quiz"> Quiz </Link>
  
          </div>

          <div className="color">
          Change Color: 
           <input type="checkbox" name="" id="Change?" onChange={this.props.checkb} />
           <input type="color" name="Background:" id="bg" onChange={this.props.mode} style={this.props.bgstyle} />
          </div>
           <div id="loggedacc">
            Logged in as: 
            <Link to ="/Profile" id='profilelink'>{this.props.loggedAcc.UserId}</Link>
           </div>
           
           <button id ="Logout" onClick={this.props.onlogout}>LogOut</button>

          <div  className = "material-symbols-outlined" id="contact" onClick={this.props.menu}>
             menu
          </div>

      </div>

      
    )
  }
}

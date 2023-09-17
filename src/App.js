import logo from './logo.svg';
//this.methodName = this.methodName.bind(this) import { Home } from './Home';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//import { Switch } from 'react-router-dom';

import Home from './Components/Home';
import Newcomp1 from './Components/Newcomp1';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import Loginform  from './Components/loginform'; 
import { useLocation } from 'react-router-dom';
import NavBar2 from './Components/NavBar2';
import VConnect from './Components/VConnect';
import Jobs from './Components/Jobs';
import Quiz from './Components/Quiz';
import Library from './Components/Library';
import Menu from './Components/Menu';
import Profile from './Components/Profile';
import News from './Components/News';


// let initAccounts =[{
//   AccId:1,
//   UserId:'First Account',
//   Password: 'Password1',
//   Email:'Email1',
// }]





function App() {

  const [Accounts,setAccounts] = useState(
    [{
      AccId:1,
      UserId:'Acc1',
      Password: 'pwd1',
      Email:'Email1',
      Followers:0,
      Following:0,
      dp:'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
      Posts: [
        {
                  id:1,
                  name: "Name",
                  content:"Content",
                  Media : "3608226.jpg",
                  Likes: 0,
                  Shares: 0,
                  Comments: [
                      
                      ],
                      //noComs: `${this.Comments.length}`,
          
              },
      ],
    }]
  )
  
   
    console.log(Accounts)
   const [loggedinAcc, setLoggedinAcc] = useState({})
   const[loggegaccId,setLoggedAccId] = useState(0);
  // Login States and handler
   const [login,setLogin] =useState(true);
  //console.log("login " + login);

  useEffect(()=>{
     if(login === true){
      setLogin(false);
     }
  },[]);
  
  const [userId, setUserId] = useState("")
  const [pwd,setPwd] = useState("")
  const [email, setEmail] = useState("")
  const [confirmpwd,setConfirmpwd] = useState("")

  const HandleUIDChange = (e) =>{
       setUserId (e.target.value)
  }
  
  const HandleEmailChange = (e) =>{
       setEmail (e.target.value)
  }
  const newPwdChange =(e) =>{
    setPwd( e.target.value)
  }
  const confirmPwdChange =(e)=>{
    setConfirmpwd(e.target.value) 
  }
  
  

  const CreateAcc =()=>{

   if(pwd === confirmpwd){
    console.log("pwd confirmed")
    const newAccounts = [...Accounts,{
      AccId: (Accounts.length +1),
      UserId: userId,
      Password: pwd,
      Email: email,
      Followers: 0,
      Following: 0,
      dp:'https://cdn.vectorstock.com/i/preview-1x/70/84/default-avatar-profile-icon-symbol-for-website-vector-46547084.jpg',
      Posts:[
        {
          id:1,
          name: "Name",
          content:"Content",
          Media : "3608226.jpg",
          Likes: 0,
          Shares: 0,
          Comments: [
              
              ],
              //noComs: `${this.Comments.length}`,
        
        }
      ],
    },]
    
   setAccounts(newAccounts)
    // console.log(Accounts[Accounts.length-1])
    
    alert("Account Created Successfully")
    
   }else{
    alert("Your Passwords Don't Match!! Pls Enter Same password in \'Confirm Password\' Box")
   }
    
  }

  const sub = ()=>{
   let Accfound = false
   const check =(a)=>{
    if(a.UserId === userId && a.Password === pwd){
       Accfound = true;
       setLoggedinAcc(a)
       setLoggedAccId(a.AccId)
    }
   }
   Accounts.forEach(check)
   if(Accfound){
      setLogin(true)
      console.log(loggedinAcc)
   }else{
       alert("Invalid Username or Password!")
      setLogin(false)
   }
  //setLogin(true)
   }
   
 
  
  const HandleLogout = ()=>{
    setLogin(false);
    setLoggedinAcc({
      AccId: '',
      UserId: 'None',
      Email:'',
      Password: '',
      Followers:0,
      Following:0

    });
  }


 // DarkMode states and handlers

 const [btntext, setbtntext] = useState("Dark Mode");

 //***PoSts */
 let  [postobjs,setPostobjs] = useState(
  [
      {
  id:1,
  name: "Name",
  content:"Content",
  Media : "3608226.jpg",
  Likes: 0,
  Shares: 0,
  Comments: [
      
      ],
      //noComs: `${this.Comments.length}`,

},
      {
  id:2,
  name: "Name2",
  content:"Content2",
  Media : "3608226.jpg",
  Likes: 0,
  Shares: 0,
  Comments: [
     
      ],
      //noComs: `${this.Comments.length}`,

},
      {
  id:3,
  name: "Name3",
  content:"Content3",
  Media : "3608226.jpg",
  Likes: 0,
  Shares: 0,
  Comments: [
      ],
      //noComs: `${this.Comments.length}`,

},
]
)


 // Color modes
 //const [Mode, setMode] = useState('default light');
 const [bgstyle,setBgstyle] = useState({
  color: 'white',
  backgroundColor: 'darkorchid' // dark mode rgb 65 9 90
 })


 const changeMode = (event3)=>{
    const bgcolor = event3.target.value;
    // console.log(bgcolor);
    const bgRGB = colorToRgb(bgcolor);
    const textcolor = bgRGB.r<127&&bgRGB.g<127&&bgRGB.b<127 ? 'white':'black';
    const bordercolor = textcolor;

    if(check){
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
     

    
 }

 const [tboxStyle,setTbStyle] = useState(
  {
    color: 'rgb(87 14 81)',
    backgroundColor:'#e2b5ed',
    border: '3px solid rgb(87 14 81)',
    borderRadius: '5px',
    

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

const [check,setCheck] = useState(false);
const HandleCheck = () =>{
  setCheck(!check);
}
// ---------------------------------------------------------------// -------------------------------------------------------------------------''
const [btnStyle,setbtnStyle] = useState({
  margin: '4px 4px',
  backgroundColor:  'hsl(288, 61%, 82%)',
  color: 'rgb(87 14 81)',
  border: "2px solid rgb(87 14 81)", 
});

const [menuState,setMenuState] = useState({
  display:'none',

});
const [menudisp,setmMenuDisp] = useState(false);
const [navStyle,setNavStyle] = useState(
  {
   
    width: "100%",
  }
)
const [navstyl,setNavstyl] = useState({
  margin: '2px 311px',
})


 
const HandleMenu = ()=>{
  if(!menudisp){
    setMenuState({
     
    
    });
    setNavStyle(
      {
        
        width:"85%",
      }
    )
    setNavstyl({
      margin:'0px 250px',
    })
    setmMenuDisp(true);
    
  }else{
    setMenuState({
      display:'none',
    });
    setNavStyle({
     width:'100%', 
    });
    setNavstyl({
      
    })
    setmMenuDisp(false);
  }
 
}


 
  //if(login){
    return (
      <div className="App" style={bgstyle}>
      <Menu display = {menuState} mclick ={HandleMenu} mode ={changeMode} checkb ={HandleCheck} onlogout = {HandleLogout}/>
      <NavBar2 mode ={changeMode} appstyle ={bgstyle} tbstyle ={tboxStyle} onlogout = {HandleLogout} checkb ={HandleCheck} menu ={HandleMenu} navstyle ={navstyl} topstyle ={navStyle} loggedAcc={loggedinAcc} /> 
       

          <div className="container" style={bgstyle} >
            <Routes>
              <Route  path = '/React-projs/' element={ login ? <Home/> : 
                 <div style = {bgstyle}>
                   <Loginform  uidc = {HandleUIDChange} emc = {HandleEmailChange} pwdc ={newPwdChange} confirm = {confirmPwdChange} create ={CreateAcc} onSubmit = {sub} btnstyle={btnStyle} tbstyle = {tboxStyle}  />
                 </div>}></Route>
              <Route  path = '/TextEditor' element ={
                  login ?
                  <div className="cont">
                  <h3>  Welcome to My text Editior  </h3>
                  <br />
                     Hello, Type Your Text in the textbox below and explore the various operations you can perform!!!
                  <Newcomp1 name = "Comp1" onlogout = {HandleLogout} txtboxstyle = {tboxStyle} btnstyle = {btnStyle}/>
                </div>
                : <div style = {bgstyle}>
                <Loginform  uidc = {HandleUIDChange} emc = {HandleEmailChange} pwdc ={newPwdChange} confirm = {confirmPwdChange} create ={CreateAcc} onSubmit = {sub} btnstyle={btnStyle} tbstyle = {tboxStyle}  />
              </div>
              } >
              </Route>

              <Route path = '/VConnect' element = {login ? <VConnect bgstyle={bgstyle} loggedAcc = {loggedinAcc} postobjs={postobjs} setpostobjs ={setPostobjs} setAccs = {setAccounts} Accs ={Accounts} setLoggedinAcc = {setLoggedinAcc}/> 
              :<div style = {bgstyle}>
                <Loginform   uidc = {HandleUIDChange} emc = {HandleEmailChange} pwdc ={newPwdChange} confirm = {confirmPwdChange} create ={CreateAcc} onSubmit = {sub} btnstyle={btnStyle} tbstyle = {tboxStyle}  />
              </div>} />
              <Route path = '/Library' element = {login ? <Library /> :<div style = {bgstyle}>
                <Loginform  uidc = {HandleUIDChange} emc = {HandleEmailChange} pwdc ={newPwdChange} confirm = {confirmPwdChange} create ={CreateAcc} onSubmit = {sub} btnstyle={btnStyle} tbstyle = {tboxStyle}  />
              </div>} />
              <Route path = '/Jobs' element = {login ? <Jobs /> :<div style = {bgstyle}>
                <Loginform  uidc = {HandleUIDChange} emc = {HandleEmailChange} pwdc ={newPwdChange} confirm = {confirmPwdChange} create ={CreateAcc} onSubmit = {sub} btnstyle={btnStyle} tbstyle = {tboxStyle}  />
              </div>} />
              <Route path = '/News' element = {login ? <News /> :<div style = {bgstyle}>
                <Loginform  uidc = {HandleUIDChange} emc = {HandleEmailChange} pwdc ={newPwdChange} confirm = {confirmPwdChange} create ={CreateAcc} onSubmit = {sub} btnstyle={btnStyle} tbstyle = {tboxStyle}  />
              </div>} />
              <Route path = '/Quiz' element = {login ? <Quiz /> :<div style = {bgstyle}>
                <Loginform  uidc = {HandleUIDChange} emc = {HandleEmailChange} pwdc ={newPwdChange} confirm = {confirmPwdChange} create ={CreateAcc} onSubmit = {sub} btnstyle={btnStyle} tbstyle = {tboxStyle}  />
              </div>} />
              <Route path ='/Profile' element ={login ? <Profile Acc = {loggedinAcc} /> : <div style = {bgstyle}>
                <Loginform  uidc = {HandleUIDChange} emc = {HandleEmailChange} pwdc ={newPwdChange} confirm = {confirmPwdChange} create ={CreateAcc} onSubmit = {sub} btnstyle={btnStyle} tbstyle = {tboxStyle} setlogin = {setLogin} /> </div>} />
     
            
            </Routes>
          </div>
          <br />
          <br />
          <br />

            </div>
    );
  
  // else{
  //   return(

  //     <div style = {bgstyle}>
  //       <Loginform  uidc = {HandleUIDChange} emc = {HandleEmailChange} pwdc ={newPwdChange} confirm = {confirmPwdChange} create ={CreateAcc} onSubmit = {sub} btnstyle={btnStyle} tbstyle = {tboxStyle}  />
  //     </div>
      
  //   );
  // }

}



export default App;

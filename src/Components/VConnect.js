import React from 'react'
import './Styless/VConnect.css'
import Navbar from './Navbar'
import Posts from './Posts'
export default function VConnect(props) {
  return (
    <div id ='VconnectBody'style={props.bgstyle}>
       {/* <Navbar /> */}
      <div id = 'About'>
       
        <h3>What is VConnect? </h3>
        <br />
       
        VConnect is a complete social media website, where you can make posts, like them , comment on them, and reply to the comments, you can also like the comments and replies by pressing the like button, you can also filter the posts made by you, using the filter option, and also post images from your device.
        

      </div>
         {/* <h1>
            DIVE IN !!!!
         </h1> */}

         <Posts loggedAcc ={props.loggedAcc} postobjs ={props.postobjs} setpostobjs = {props.setpostobjs} setAccs ={props.setAccs} Accs ={props.Accs} setLoggedinAcc = {props.setLoggedinAcc}/>
         <br />
         <br />
    </div>
  )
}

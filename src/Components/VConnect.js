import React from 'react'
import './Styless/VConnect.css'
import Navbar from './Navbar'
import Posts from './Posts'
export default function VConnect(props) {
  return (
    <div id ='VconnectBody'style={props.bgstyle}>
       <Navbar />
      <div id = 'About'>
       
        <h3>What is VConnect? </h3>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint similique, iure quod harum enim reiciendis quos inventore mollitia sapiente veritatis nulla voluptas alias laborum dolor earum autem amet necessitatibus cum obcaecati? Quia quasi quos ipsam nobis necessitatibus labore atque rem, quibusdam quis accusantium sint animi suscipit alias omnis consequatur? Minima dicta rem commodi ut, ea neque voluptates.
      </div>
         <h1>
            DIVE IN !!!!
         </h1>

         <Posts loggedAcc ={props.loggedAcc} postobjs ={props.postobjs} setpostobjs = {props.setpostobjs} setAccs ={props.setAccs} Accs ={props.Accs} setLoggedinAcc = {props.setLoggedinAcc}/>
         <br />
         <br />
    </div>
  )
}

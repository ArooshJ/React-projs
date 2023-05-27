import React from 'react';
import './Styless/login.css';

export default function Loginform(props) {
  return (
    <div className='loginform'>

       <div className="content">
        <h1>What is My-Site?.. </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cupiditate odit culpa sapiente quas nihil suscipit a, deserunt aliquid incidunt. Consequatur quisquam velit qui at molestias quam reprehenderit tempora nesciunt ad cupiditate corrupti adipisci ex voluptates consectetur aperiam vitae aliquid dolorum, pariatur expedita dolore, ducimus iure. Praesentium minus dolores eveniet accusantium nemo, ea optio excepturi autem nisi quas. Nesciunt molestias repellendus praesentium nihil in? Consectetur sequi eaque illum quod fugit?</p>
       </div>
      
        <form action="">
            <div id="inform1">
            <h4>Login to My-Site</h4>
             <label htmlFor=""> UserName: </label>
             <br />
             <input type="text" name="UserName " id="username" style={props.tbstyle} onChange={props.uidc}/>
             <br />
             <label htmlFor="">Password : </label>
             <br />
             <input type="password" name="Password" id="password" style={props.tbstyle} onChange={props.pwdc} />
             <br />
             <input type="button" value="Submit" onClick={props.onSubmit} className='submit'  />
            </div>
            
        </form>
                 <br />
            <h2>OR
            </h2>
            <br />

            

            <h4>Sign Up</h4>
            <form action="">
            <div id="inform2">
            <div id='Googlesign'>
                <div id="gin">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" id ='G' />
                <h3>Sign in with Google</h3>
                </div>
                
            </div>
            <label htmlFor=""> UserName: </label> <br />
            <input type="text" name="namee" id="" style={props.tbstyle} onChange={props.uidc} />
            <br />
            <label htmlFor=""> E-mail  : </label>
            <br />
            <input type="e-mail" name="namee" id="" style={props.tbstyle} onChange={props.emc} />
            <br />
            <label htmlFor="">Password : </label>
             <br />
             <input type="password" name="Password" id="password" style={props.tbstyle} onChange={props.pwdc}/><br />
             <label htmlFor=""> Confirm Password : </label>
             <br />
             <input type="password" name="Password" id="password" style={props.tbstyle} onChange={props.confirm} />
             <br />
             
             <input type="button" value="Create Account" onClick={props.create} className='submit'  />
            </div>
            


            </form>
            <br />
            <br />
    </div>
       
  )
}

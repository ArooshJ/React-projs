import React from 'react';
import './Styless/login.css';

export default function Loginform(props) {
  return (
    <div className='loginform'>

       <div className="content">
        <h1>What is Prac-Ed?.. </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cupiditate odit culpa sapiente quas nihil suscipit a, deserunt aliquid incidunt. Consequatur quisquam velit qui at molestias quam reprehenderit tempora nesciunt ad cupiditate corrupti adipisci ex voluptates consectetur aperiam vitae aliquid dolorum, pariatur expedita dolore, ducimus iure. Praesentium minus dolores eveniet accusantium nemo, ea optio excepturi autem nisi quas. Nesciunt molestias repellendus praesentium nihil in? Consectetur sequi eaque illum quod fugit?</p>
       </div>
      
        <form action="">
            <div id="inform1">
            <h4>Login to Prac-Ed</h4>
             <label htmlFor=""> UserName: </label>
             <br />
             <input type="text" name="UserName " id="username" style={props.tbstyle} />
             <br />
             <label htmlFor="">Password : </label>
             <br />
             <input type="password" name="Password" id="password" style={props.tbstyle} />
             <br />
             <input type="submit" value="Submit" onClick={props.onSubmit} className='submit'  />
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
                <h3>Log in with Google</h3>
                </div>
                
            </div>
            <label htmlFor=""> UserName: </label> <br />
            <input type="text" name="namee" id="" style={props.tbstyle} />
            <br />
            <label htmlFor=""> E-mail  : </label>
            <br />
            <input type="e-mail" name="namee" id="" style={props.tbstyle} />
            <br />
            <label htmlFor="">Password : </label>
             <br />
             <input type="password" name="Password" id="password" style={props.tbstyle} /><br />
             <label htmlFor=""> Confirm Password : </label>
             <br />
             <input type="password" name="Password" id="password" style={props.tbstyle} />
             <br />
             
             <input type="submit" value="Create Account" onClick={props.onSubmit} className='submit'  />
            </div>
            


            </form>
            <br />
            <br />
    </div>
       
  )
}

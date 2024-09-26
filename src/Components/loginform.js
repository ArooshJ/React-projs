import React from 'react';
import './Styless/login.css';

export default function Loginform(props) {
  return (
    <div className='loginform'>

       <div className="content">
        <h1>What is My-Site?.. </h1>
        
        <p>
          MySite is a multipurpose website wherein you can tryout miscellneous things. There's a text editor wherein you can beautify your text and play with it. A News tab where you can view the latest news. But the main feature is our social media tab VConnect where you can post (with images), like, comment and reply. The website also has basic authentication features.
        </p>

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

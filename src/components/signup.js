import React from 'react';
import AuthImage from '../assets/1.ai.png';
import google from '../assets/google.png';
import woodo from '../assets/groupregister.png';
import {Link} from 'react-router-dom'
 
const Signup = () => {
    return(
        <div className="signup">
            <div className="left-components">
                <img className = "wedoo" src={AuthImage} alt=""/>
            </div>
            <div className="right-components">
            <img className="wedoo" src={woodo} alt=""/>
                <h3>Register</h3>
                <form action="">
                <div className="name-group">
                <div className = "form-group">    
                        <p>First Name</p>
                        <input type="text" name="email"/>
                    </div>
                    <div className = "form-group">    
                        <p>Last Name</p>
                        <input type="text" name="email"/>
                    </div>
                </div>
                    <div className = "form-group">
                        <p>Email Address</p>
                        <input type="email" name="email"/>
                    </div>
                    <div className = "form-group">
                        <p>Password</p>
                        <input type="password" name="email"/>
                    </div>

                    <p className="forgot">Forgot Password ?</p>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}><input className="btn" type="submit" value="Sign In"/></Link>

                    <div className="lined-or">
                        <div className="line"></div><p>&nbsp;&nbsp;OR&nbsp;&nbsp;</p><div className="line"></div>
                    </div>
                </form>
                <button className="btn"><span><img src={google} alt=""/></span>&nbsp;&nbsp;Sign In with Google</button>
                
                <div className="signup-route">
                    <p>Already Registered ?</p>
                    <Link to="/"><p>Login</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;
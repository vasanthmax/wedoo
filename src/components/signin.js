import React from 'react';
import AuthImage from '../assets/1.ai.png';
import google from '../assets/google.png';
import woodo from '../assets/groupregister.png';
import { Link } from 'react-router-dom'
 
const Signin = () => {
    return(
        <div className="signin">
            <div className="left-components">
                <img src={AuthImage} alt=""/>
            </div>
            <div className="right-components">
                <h3>Sign In</h3>
                <form action="">
                    <div className = "form-group">
                        <p>Email Address</p>
                        <input type="email" name="email"/>
                    </div>
                    <div className = "form-group">
                        <p>Password</p>
                        <input type="password" name="email"/>
                    </div>

                    <p className="forgot">Forgot Password ?</p>
                    <Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'inherit'}}><input className="btn" type="submit" value="Sign In"/></Link>

                    <div className="lined-or">
                        <div className="line"></div><p>&nbsp;&nbsp;OR&nbsp;&nbsp;</p><div className="line"></div>
                    </div>
                </form>
                <button className="btn"><span><img src={google} alt=""/></span>&nbsp;&nbsp;Sign In with Google</button>
                <img src={woodo} alt="" height="80px"/>
                <div className="signup-route">
                    <p>Don't have an account?</p>
                    <Link to="/signup" ><p>Register</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Signin;
import React from 'react';
import './Login.css'
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hook/useAuth';
import logo from '../Login/logo/log.png'
import { Link } from 'react-router-dom';
const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    const { signInGoogle,user,handleRegistration,handleNameChange,emailChange,passwordChange} = useAuth();
    const handleGoogleLogin = () => {
        signInGoogle()
            .then(result => {
            history.push(redirect_url)
        })
            
    }
    return (
        <div >
          <h1>Contact with us</h1>
          <div className="contact-form p-3">
            <div className="row  d-flex justify-content-center ">
              <div onSubmit={handleRegistration} className="col-md-6 mt-5">
                <input onBlur={handleNameChange}
                  className="input-field"
                  type="text"
                  placeholder="Enter Your Name"
                />
                <br />
                <input onBlur={emailChange}
                  className="input-field"
                  type="Email"
                  placeholder="Enter Your Email"
                />
                <br />
                <input onBlur={passwordChange}
                  className="input-field"
                  type="password"
                  placeholder="Enter Your password"
                />
                <br />
                
                        <input className="input-button" type="submit" value="Submit" />
                        <br />
                        <br />
                        <p>Are you new? please <Link to="/register">register</Link>.</p>
                        
                        <button onClick={handleGoogleLogin} className="btn btn-primary  w-50">Google Sign In</button>
                        
              </div>
              <div className="col-md-6">
                <div className="contact-im">
                  <img
                    className="w-100"
                    src={logo}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Login;






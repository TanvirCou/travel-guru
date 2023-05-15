import React, { useState } from 'react';
import Header from '../Header/Header';
import './Login.css';
import fbImg from '../../images/icons/fb.png';
import googlePart from '../../images/icons/google.png';

const Login = () => {
    const [newUser, setNewUser] = useState(false);

    

    return (
        <div>
            <Header></Header>
            {
                !newUser &&
                <div className='login-form'>
                <h3>Login</h3>
                <form action="">
                <input type="email" name="email" placeholder='Username or Email' />
                <br />
                <input type="password" name="password" placeholder='Password'/>
                <br />
                <button className='forgot-btn'>Forgot Password</button>
                <br />
                <button className='booking-login-button'>Login</button>
                </form>
                <p>Don't have an account? <span><button onClick={()=> setNewUser(!newUser)} className='create-btn'>Create an account</button></span></p>
            </div>
            }
            

            {
                newUser &&
                <div className='signUp-form'>
            <h3>Create an account</h3>
                <form action="">
                <input type="text" name="firstName" placeholder='First Name' />
                <br />
                <input type="text" name="lastName" placeholder='Last Name' />
                <br />    
                <input type="email" name="email" placeholder='Username or Email' />
                <br />
                <input type="password" name="password" placeholder='Password'/>
                <br />
                <input type="password" name="confirmPassword" placeholder='Confirm Password'/>
                <br />
                <button className='booking-login-button'>Create an account</button>
                </form>
                <p className='signUp-text'>Already have an account?<span><button onClick={()=> setNewUser(!newUser)} className='create-btn'>Login</button></span></p>
            </div>
            }
            
            <div>
            <h2 class="hr-lines">Or</h2>
            </div>
            <div className='social-part'>
                <button className='fb-part'>
                    <img src={fbImg} alt="" />
                    <p>Continue with Facebook</p>
                </button>
                <button className='google-part'>
                    <img src={googlePart} alt="" />
                    <p>Continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default Login;
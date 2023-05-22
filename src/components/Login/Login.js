import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import './Login.css';
import fbImg from '../../images/icons/fb.png';
import googlePart from '../../images/icons/google.png';
import { createUserWithEmailAndPass, handleGoogleSignIn, handleGoogleSignOut, initializeLoginFramework, resetPassword, signInWithEmailAndPass } from './LoginManager';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

initializeLoginFramework();


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        success: false
    })

    

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            handleResponse(res, true);
        })
    }

    const googleSignOut = () => {
        handleGoogleSignOut()
        .then(res => {
            handleResponse(res, false);
        })
    }



    const handleBlur = (e) => {
        let formValid = true;
        if (e.target.name === 'email') {
            formValid = /^\S+@\S+\.\S+$/.test(e.target.value);
        }
        
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 7;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            formValid = isPasswordValid && passwordHasNumber;
        }
        
        if (formValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    

    const handleSubmit = (e) => {
        
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPass(user.firstName, user.lastName, user.email, user.password)
            .then(res => {
                handleResponse(res, false);
            })
            
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPass(user.email, user.password)
            .then(res => {
                handleResponse(res, true);
            })
        }
        e.preventDefault();
    }

    const handleResponse = (res, doRedirect) => {
        setUser(res);
        setLoggedInUser(res);
        if(doRedirect){
            navigate(from, {replace: true});
        }
    }
    

    return (
        <div className='account-info'>
            <Header></Header>
            {
                !newUser &&
                <div className='login-form'>
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" onBlur={handleBlur} placeholder='Username or Email' required />
                        <br />
                        <input type="password" name="password" onBlur={handleBlur} placeholder='Password' required />
                        <br />
                        <button onClick={()=> resetPassword(user.email)} className='forgot-btn'>Forgot Password</button>
                        <br />
                        <input type="submit" value="Login" className='booking-login-button' />
                    </form>
                    <p>Don't have an account? <span><button onClick={() => setNewUser(!newUser)} className='create-btn'>Create an account</button></span></p>
                </div>
            }


            {
                newUser &&
                <div className='signUp-form'>
                    <h3>Create an account</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="firstName" onBlur={handleBlur} placeholder='First Name' required />
                        <br />
                        <input type="text" name="lastName" onBlur={handleBlur} placeholder='Last Name' required />
                        <br />
                        <input type="email" name="email" onBlur={handleBlur} placeholder='Username or Email' required />
                        <br />
                        <input type="password" name="password" onBlur={handleBlur} placeholder='Password' required />
                        <br />
                        <input type="password" name="confirmPassword" onBlur={handleBlur} placeholder='Confirm Password' required />
                        <br />
                        <input type="submit" value="Create an account" className='booking-login-button' />
                    </form>
                    <p className='signUp-text'>Already have an account?<span><button onClick={() => setNewUser(!newUser)} className='create-btn'>Login</button></span></p>
                </div>
            }
            
            <br />
            <p style={{color:'red', textAlign:'center'}}>{user.error}</p>
             {
                 user.success && <p style={{color:'green',textAlign:'center'}}>Sign {newUser ? 'up' : 'in'} successfully complete</p>
             }
            <div>
                <h2 class="hr-lines">Or</h2>
            </div>
            <div className='social-part'>
                <button className='fb-part'>
                    <img src={fbImg} alt="" />
                    <p>Continue with Facebook</p>
                </button>
                {
                    loggedInUser.isSignedIn ? <button onClick={googleSignOut} className='google-part'>
                        <p style={{marginLeft: '190px'}}>Sign out</p>
                    </button> :
                        <button onClick={googleSignIn} className='google-part'>
                            <img src={googlePart} alt="" />
                            <p>Continue with Google</p>
                        </button>
                }
            </div>
        </div>
    );
};

export default Login;
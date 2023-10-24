import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPass, handleGoogleSignIn } from '../LoginManager/LoginManager';
import Navbar from '../Navbar/Navbar';
import googleLogo from '../../assets/images/icons/google.png';
import { UserContext } from '../../App';

const SignUp = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agree: false,
        error: '',
        success: false
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [pass, setPass] = useState('');


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
            setUser(res);
            setLoggedInUser(res);
            navigate(from, {replace: true});
        })
    }

    // const googleSignOut = () => {
    //     handleGoogleSignOut()
    //     .then(res => {
    //         handleResponse(res, false);
    //     })
    // }

    let pass1, pass2;

    const handleBlur = (e) => {
        let formValid = true;
        const newError = { ...errors };

        if (e.target.name === 'name') {
            formValid = e.target.value.length > 2;

            if (!formValid) {
                newError[e.target.name] = 'Name is not valid';
                setErrors(newError);
            } else {
                newError[e.target.name] = '';
                setErrors(newError);
            }
        }

        if (e.target.name === 'email') {
            formValid = /^\S+@\S+\.\S+$/.test(e.target.value);

            if (!formValid) {
                newError[e.target.name] = 'Email is not valid';
                setErrors(newError);
            } else {
                newError[e.target.name] = '';
                setErrors(newError);
            }
        }

        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 7;
            const passwordHasNumber = /\d{1}/.test(e.target.value);

            formValid = isPasswordValid && passwordHasNumber;

            pass1 = e.target.value;

            if (!formValid) {
                newError[e.target.name] = 'Password is not valid';
                setErrors(newError);
            } else {
                newError[e.target.name] = '';
                setErrors(newError);
            }
            setPass(pass1);
        }

        if (e.target.name === 'confirmPassword') {
            pass2 = e.target.value;

            if (pass !== pass2) {
                newError[e.target.name] = 'Password is not matched';
                setErrors(newError);
            } else {
                newError[e.target.name] = '';
                setErrors(newError);
            }
        }

        if (formValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.name && user.email && user.password) {
            createUserWithEmailAndPass(user.name, user.email, user.password)
                .then(res => {
                    if (res.success) {
                        setUser(res);
                        alert("Check your email for verification");
                        navigate('/login');
                    }
                    if (!res.success) {
                        res.error = '**This email is already used**'
                        setUser(res);
                    }
                })
        }
        e.preventDefault();
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-full flex justify-center pt-16 pb-8'>
            <form action="" onSubmit={(e) => handleSubmit(e)} className='p-8 shadow-md rounded xl:w-2/5 lg:w-2/4 md:w-3/5 sm:w-3/4 min-[320px]:w-4/5 border-2'>
            <p className='text-center font-bold text-2xl pb-2'>Create an account</p>
            <div className='mt-6 items-center'>
                <input type="text" name="name" placeholder='Enter name' onBlur={handleBlur} required className='w-full h-12 border-b-2 placeholder:text-lg placeholder:text-gray-400 placeholder:font-semibold  focus:outline-amber-400 focus:px-2 p-2'/>
                
            </div>
            {errors.name.length > 0 && <p className='w-full text-red-400 font-semibold py-1 px-1'>{errors.name}</p>}

            <div className='mt-6 items-center'>
                <input type="email" name="email" placeholder='Enter email' onBlur={handleBlur} required className='w-full h-12 border-b-2 placeholder:text-lg placeholder:text-gray-400 placeholder:font-semibold  focus:outline-amber-400 focus:px-2 p-2' />
                
            </div>
            {errors.email.length > 0 && <p className='w-full text-red-400 font-semibold py-1 px-1'>{errors.email}</p>}

            <div className='mt-6 items-center'>
                <input type="password" name="password" placeholder='Enter password' onBlur={handleBlur} required className='w-full h-12 border-b-2 placeholder:text-lg placeholder:text-gray-400 placeholder:font-semibold  focus:outline-amber-400 focus:px-2 p-2' />
                
            </div>
            {errors.password.length > 0 && <p className='w-full text-red-400 font-semibold py-1 px-1'>{errors.password}</p>}

            <div className='mt-6 items-center'>
                <input type="password" name="confirmPassword" placeholder='Confirm password' onBlur={handleBlur} required className='w-full h-12 border-b-2 placeholder:text-lg placeholder:text-gray-400 placeholder:font-semibold  focus:outline-amber-400 focus:px-2 p-2' />
               
            </div>
            {errors.confirmPassword.length > 0 && <p className='w-full text-red-400 font-semibold py-1 px-1'>{errors.confirmPassword}</p>}

            <div className='my-4 w-full'>
                <button type='submit' className='w-full h-12 rounded-md bg-amber-400 hover:bg-amber-500'>
                    <span className='text-gray-700 font-semibold'>SUBMIT NOW</span>
                </button>
            </div>

            {user.error.length > 0 && <p className='bg-red-400 font-semibold mx-5 mt-2 py-2 rounded-md text-center'>{user.error}</p>}

            <div className='text-center text-gray-600 font-medium'>
                Already have an account? <Link to="/login" className='text-amber-500'>Login</Link> instead.
            </div>
        </form>
            </div>
            <div className='flex justify-center'>
            <hr className='xl:w-2/5 lg:w-2/4 md:w-3/5 sm:w-3/4 min-[320px]:w-4/5 bg-amber-400'/> 
        </div>
        <div className='flex justify-center mt-4 mb-12'>
        <button onClick={googleSignIn} className='flex xl:w-2/5 lg:w-2/4 md:w-3/5 sm:w-3/4 min-[320px]:w-4/5 border-4 p-2 rounded-[40px]'>
                            <img src={googleLogo} alt="" className='w-10'/>
                            <p className='font-semibold text-center w-full my-2'>Continue with Google</p>
                        </button>
        </div>
        </div>
    );
};

export default SignUp;
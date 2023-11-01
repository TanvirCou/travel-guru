import { useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { handleGoogleSignIn, resetPassword, signInWithEmailAndPass, initializeLoginFramework } from '../LoginManager/LoginManager';
import googleLogo from '../../assets/images/icons/google.png';
import { UserContext } from '../../App';

initializeLoginFramework();

const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        isSignedIn: false,
        email: '',
        password: '',
        error: '',
        success: false
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                if (from === '/') {
                    navigate('/');

                } else {
                    navigate(from, { state: location.state.from.state }, { replace: true });
                }
            })
    }


    const handleBlur = (e) => {
        let formValid = true;
        const newError = { ...errors };

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

            if (!formValid) {
                newError[e.target.name] = 'Password should be bigger than 7 words and include a number';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.email && user.password) {
            await signInWithEmailAndPass(user.email, user.password)
                .then(res => {
                    if (!res.email && !res.success) {
                        res.error = '**Email or password is incorrect**';
                        res.success = false;
                        setUser(res);
                        setLoggedInUser(res);
                    }
                    if (res.email && !res.emailVerified) {
                        res.error = '**A verification message was sent to your email.You can verify your email from there**';
                        res.success = false;
                        alert("Check your email for verification");
                        setUser(res);
                        setLoggedInUser(res);
                    }
                    if (res.emailVerified && res.email && res.success) {
                        res.success = true;
                        setUser(res);
                        setLoggedInUser(res);
                        navigate(from, { state: location.state?.from?.state }, { replace: true });
                    }
                })
        }

    };

    const handleResetPassword = () => {
        resetPassword(user.email);
        alert('Check your email for setting new password');
    };

    return (
        <div className='pt-36'>
            <Navbar></Navbar>
            <div className='w-full flex justify-center pb-8'>
                <form action="" onSubmit={handleSubmit} className='p-8 shadow-md rounded xl:w-2/5 lg:w-2/4 md:w-3/5 sm:w-3/4 min-[320px]:w-4/5 border-2'>
                    <p className='text-center font-bold text-2xl pb-2'>Login</p>
                    <div className='mt-6 w-full items-center'>
                        <input type="email" name="email" placeholder='Email' onBlur={handleBlur} required className='w-full h-12 border-b-2 placeholder:text-lg placeholder:text-gray-400 placeholder:font-semibold  focus:outline-amber-400 focus:px-2 p-2' />
                    </div>
                    {errors.email.length > 0 && <p className='w-full text-red-400 font-semibold py-1 px-1'>{errors.email}</p>}

                    <div className=' mt-6 w-full items-center'>
                        <input type="password" name="password" placeholder='Password' onBlur={handleBlur} required className='w-full h-12 border-b-2 placeholder:text-lg placeholder:text-gray-400 placeholder:font-semibold focus:outline-amber-400 focus:px-2 p-2' />
                    </div>
                    {errors.password.length > 0 && <p className=" w-full text-red-400 font-semibold py-1 rounded-md px-1">{errors.password}</p>}


                    <div className='my-4 w-full'>
                        <p onClick={handleResetPassword} className='w-full text-sm cursor-pointer text-red-600 font-semibold text-right px-4'>Forgot Password?</p>
                    </div>

                    <div className='my-4 w-full'>
                        <button type='submit' className='w-full h-12 rounded-md bg-amber-400 hover:bg-amber-500'>
                            <span className='text-gray-700 font-semibold'>SUBMIT NOW</span>
                        </button>
                    </div>

                    {user.error.length > 0 && <p className='bg-red-400 font-semibold mx-5 mt-2 py-2 rounded-md text-center'>{user.error}</p>}

                    <div className='text-center w-full text-gray-600 font-medium'>
                        Don&apos;t have an account? <Link to="/signup" className='text-amber-500'>SignUp</Link> instead.
                    </div>
                </form>
            </div>

            <div className='flex justify-center'>
                <hr className='xl:w-2/5 lg:w-2/4 md:w-3/5 sm:w-3/4 min-[320px]:w-4/5 border border-gray-300' />
            </div>
            <div className='flex justify-center mt-4 mb-12'>
                <button type='submit' onClick={googleSignIn} className='flex xl:w-2/5 lg:w-2/4 md:w-3/5 sm:w-3/4 min-[320px]:w-4/5 border-4 p-2 rounded-[40px]'>
                    <img src={googleLogo} alt="" className='w-10' />
                    <p className='font-semibold text-center w-full my-2'>Continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default Login;
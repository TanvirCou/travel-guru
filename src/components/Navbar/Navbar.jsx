import { useContext, useState } from 'react';
import logo from '../../assets/images/icons/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleGoogleSignOut, logOut } from '../LoginManager/LoginManager';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        if (loggedInUser.googleSignIn) {
            handleGoogleSignOut()
                .then(res => {
                    localStorage.removeItem('token');
                    setLoggedInUser(res);
                    navigate('/login');
                })
        } else {
            logOut();
            localStorage.removeItem('token');
            setLoggedInUser(!loggedInUser.success);
            navigate('/login');
        }
    }


    return (
        <div className='shadow-md w-full fixed z-10 top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-20 px-7'>
                <div className='text-white md:px-12 px-6 items-center'>
                    <Link to='/'><img src={logo} alt="" className='w-24' /></Link>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0  absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-12 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'}`}>
                    <li className='md:ml-8 text-lg font-semibold md:my-0 my-7'>
                        <Link to='/' className='text-gray-800 hover:text-gray-400 duration-500'>Home</Link>
                    </li>
                    <li className='md:ml-8 text-lg font-semibold md:my-0 my-7'>
                        <Link to='/' className='text-gray-800 hover:text-gray-400 duration-500'>Destination</Link>
                    </li>
                    <li className='md:ml-8 text-lg font-semibold md:my-0 my-7'>
                        <Link to='/' className='text-gray-800 hover:text-gray-400 duration-500'>Blog</Link>
                    </li>
                    {
                        (localStorage.getItem('token') || loggedInUser.success) ?
                            <li onClick={handleLogout} className='md:ml-8 text-lg font-semibold md:my-0 my-7 '>
                                <Link to='/login' className='text-red-600 hover:text-gray-400 duration-500 bg-amber-400 py-2 px-3 rounded'>Logout</Link>
                            </li>
                            :
                            <li className='md:ml-8 text-lg font-semibold md:my-0 my-7 '>
                                <Link to='/login' className='text-gray-800 hover:text-gray-400 duration-500 bg-amber-400 py-2 px-3 rounded'>Login</Link>
                            </li>
                    }

                </ul>

            </div>

        </div>
    );
};

export default Navbar;
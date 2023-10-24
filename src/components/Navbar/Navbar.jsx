import { useState } from 'react';
import logo from '../../assets/images/icons/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    // const [loggedInUser, setLoggedInUser] = useUserState();
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     logOut();
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('email');
    //     setLoggedInUser(!loggedInUser.success);
    //     navigate('/login');
    // }

    return (
        <div className='shadow-md w-full relative z-10 top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-20 px-7'>
                <div className='text-white md:px-12 px-6 items-center'>
                    <img src={logo} alt="" className='w-24'/>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0  absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-12 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'}`}>
                    <li className='md:ml-8 text-lg font-semibold md:my-0 my-7'>
                        <Link to='/' className='text-gray-800 hover:text-gray-400 duration-500'>Home</Link>
                    </li>
                    <li className='md:ml-8 text-lg font-semibold md:my-0 my-7'>
                        <Link to='/destination' className='text-gray-800 hover:text-gray-400 duration-500'>Destination</Link>
                    </li>
                    <li className='md:ml-8 text-lg font-semibold md:my-0 my-7'>
                        <Link to='/blog' className='text-gray-800 hover:text-gray-400 duration-500'>Blog</Link>
                    </li>
                    <li className='md:ml-8 text-lg font-semibold md:my-0 my-7 '>
                        <Link to='/login' className='text-gray-800 hover:text-gray-400 duration-500 bg-amber-400 py-2 px-3 rounded'>Login</Link>
                    </li>
                </ul>

            </div>

        </div>
    );
};

export default Navbar;
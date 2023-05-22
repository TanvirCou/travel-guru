import React, { useContext, useState } from 'react';
import './Header.css';
import Button from '@mui/material/Button';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';




const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div >
            <nav >
                <ul>
                    <li className='logo'>
                        <img src={logo} alt="" />
                    </li>
                        <input type="search" name="" placeholder='Search your destination' className='search-bar'/>
                    <div className='items'>
                        <li><Link to="/home">Home</Link></li>
                        <li><a href="/destination">Destination</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li> 
                        <Link to="/login"><button className='login-btn'>{!loggedInUser.success ? "Login" : loggedInUser.name || loggedInUser.displayName}</button></Link> 
                        </li>
                    </div>
                </ul>
            </nav>

        </div>


    );
};

export default Header;
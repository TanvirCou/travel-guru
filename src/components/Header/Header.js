import React from 'react';
import './Header.css';
import Button from '@mui/material/Button';
import logo from '../../images/logo.png';




const Header = () => {
    return (
        <div >
            <nav >
                <ul>
                    <li className='logo'>
                        <img src={logo} alt="" />
                    </li>
                        <input type="search" name="" placeholder='Search your destination' className='search-bar'/>
                    <div className='items'>
                        <li><a href="/news">News</a></li>
                        <li><a href="/destination">Destination</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><button className='login-btn'>Login</button></li>
                    </div>
                </ul>
            </nav>

        </div>


    );
};

export default Header;
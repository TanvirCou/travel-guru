import React, { useContext, useState } from 'react';
import './Booking.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const Booking = () => {
   
    const navigate = useNavigate();   
    const handleSearchDetails = () => {
        navigate('/search');
    }

    return (
        <div className='backgroundImg'>
            <Header setLoginNameShow={false}></Header>
            <div className='carousel'>
                <div className='text-area'>
                    <h1>Sajek</h1>
                    <p>Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in the Rangamati District. The valley is 1,476 feet (450 m) above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati.</p>
                </div>
                <div className='form-area'>
                    <div className='origin-part'>
                        <label htmlFor="origin">Origin</label>
                        <br />
                        <input type="text" name="origin" />
                    </div>
                    <div className='destination-part'>
                        <label htmlFor="destination">Destination</label>
                        <br />
                        <input type="text" name="destination" />
                    </div>
                    <div className='date-part'>
                        <div className='from-part'>
                            <label htmlFor="from">From</label>
                            <br />
                            <input type="date" name="fromDate" id="" />
                        </div>
                        <div className='to-part'>
                            <label htmlFor="to">To</label>
                            <br />
                            <input type="date" name="toDate" id="" />
                        </div>
                    </div>
                    <br />
                    <button onClick={handleSearchDetails} className='start-booking-btn'>Start Booking</button>
                </div>
            </div>

        </div>

    );
};

export default Booking;
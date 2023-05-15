import React from 'react';
import Header from '../Header/Header';
import resort1 from '../../images/Rectangle 26.png';
import resort2 from '../../images/Rectangle 27.png';
import resort3 from '../../images/Rectangle 28.png';
import './Search.css';

const Search = () => {
    return (
        <div>
            <Header></Header>
            <div className='all-details'>
                <h3>Stay in Sajek</h3>
                <div className='place-details'>
                    <div className='resort-booking-details'>
                        <div className='resort-details'>
                            <div className='resort-image'>
                                <img src={resort1} alt="" />
                            </div>
                            <div className='resort-info'>
                                <h5>Light bairy airy stylish apt & safe peaceful stay</h5>
                                <p>4 guests  2 bedrooms   2 bed</p>
                                <p>wifi Available</p>
                                <p>Cancellation flexibility available</p>
                                <h5>$34/night</h5>
                            </div>

                        </div>

                        <div className='resort-details'>
                            <div className='resort-image'>
                                <img src={resort2} alt="" />
                            </div>
                            <div className='resort-info'>
                                <h5>Resort Megh</h5>
                                <p>4 guests  2 bedrooms   2 bed</p>
                                <p>wifi Available</p>
                                <p>Cancellation flexibility available</p>
                                <h5>$44/night</h5>
                            </div>
                        </div>

                        <div className='resort-details'>
                            <div className='resort-image'>
                                <img src={resort3} alt="" />
                            </div>
                            <div className='resort-info'>
                                <h5>Ar Lounge & sky view resort</h5>
                                <p>4 guests  2 bedrooms   2 bed</p>
                                <p>wifi Available</p>
                                <p>Cancellation flexibility available</p>
                                <h5>$52/night</h5>
                            </div>
                        </div>
                    </div>
                    <div className='map-details'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11444.33913506003!2d92.28464118372408!3d23.38139626277798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375262b11e9e190d%3A0xa35f430f8847b276!2sSajek!5e1!3m2!1sen!2sbd!4v1684177539618!5m2!1sen!2sbd"></iframe>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Search;
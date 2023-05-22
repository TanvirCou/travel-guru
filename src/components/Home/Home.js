import React, { useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import pic1 from '../../images/Sajek.png';
import pic2 from '../../images/Sreemongol.png';
import pic3 from '../../images/sundorbon.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='backgroundImg'>
            <Header></Header>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="carousel">
                        <div className='text-area'>
                            <h1>Sajek</h1>
                            <p>Sajek Valley is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in the Rangamati District. The valley is 1,476 feet (450 m) above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati.</p>
                            <Link to="/booking"><button className='booking-btn'>Booking</button></Link>
                        </div>
                        <div className='image-area'>
                            <img className='focus-pic' src={pic1} alt="" />
                            <img src={pic2} alt="" />
                            <img src={pic3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel">
                        <div className='text-area'>
                            <h1>Sreemangal</h1>
                            <p>People are calling Sreemangal is the tea capital of Bangladesh. Sreemangal is a hilly area. It is an upazila of Moulvibazar in Sylhet. This upazila is famous for Tea Estates</p>
                            <Link to="/booking"><button className='booking-btn'>Booking</button></Link>
                        </div>
                        <div className='image-area'>
                            <img src={pic1} alt="" />
                            <img className='focus-pic' src={pic2} alt="" />
                            <img src={pic3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel">
                        <div className='text-area'>
                            <h1>Sundarban</h1>
                            <p>Sundarbans is the biggest natural mangrove forest in the world, located between Bangladesh and India. The most beautiful part of the Sundarbans consists of Bangladesh and it is 60%. </p>
                            <Link to="/booking"><button className='booking-btn'>Booking</button></Link>
                        </div>
                        <div className='image-area'>
                            <img src={pic1} alt="" />
                            <img src={pic2} alt="" />
                            <img className='focus-pic' src={pic3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;
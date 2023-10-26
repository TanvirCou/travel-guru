import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/index';
import Navbar from '../Navbar/Navbar';

const Booking = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [bookingData, setBookingData] = useState({});
    const [bookingDetails, setBookingDetails] = useState({
        origin: '',
        from: '',
        to: '',
    });

    const handleBlur = (e) => {
        const details = {...bookingDetails};
        details[e.target.name] = e.target.value;
        details.destination = bookingData.title;
        setBookingDetails(details);
    }

    const handleSubmit = () => {

    }
    

    useEffect(()=>{
        fakeData.filter(item => (item.id === id)).map(data => setBookingData(data));
    }, [])
    
    
    return (
        <div className='bgImg'>
            <Navbar></Navbar>
            <div className='h-screen w-full md:flex relative'>
             <div className='md:w-1/2 w-full text-left lg:py-52 md:py-48 pt-40 lg:px-20 md:px-8 sm:px-32 min-[320px]:px-20'>
                <p className="text-white text-6xl font-bold pb-5">{bookingData.title}</p>
                <p className="text-white text-md font-semibold text-left py-6">{bookingData.longDesc}</p>
            </div>
            <div className='md:w-1/2 w-full md:py-52 py-20 lg::px-20 md:px-0 sm:px-12 justify-center'>
                <div className='w-full justify-center flex'>
                <form action="" onSubmit={handleSubmit} className='w-2/3 bg-white rounded py-3 shadow-md'>
                    <div className='px-4 py-1'>
                        <label htmlFor="origin" className='text-gray-400 text-sm font-semibold'>Origin</label>
                        <br />
                        <input type="text" onBlur={handleBlur} name='origin' className='bg-gray-200 w-full h-10 rounded px-2 focus:outline-gray-300 focus:border-gray-300'/>
                    </div>
                    <div className='px-4 py-1'>
                        <label htmlFor="destination" className='text-gray-400 text-sm font-semibold'>Destination</label>
                        <br />
                        <input type="text" value={bookingData.title} disabled className='bg-gray-200 w-full h-10 rounded px-2 focus:outline-gray-300 focus:border-gray-300'/>
                    </div>
                    <div className='flex py-1'>
                        <div className='px-4 w-1/2'>
                            <label htmlFor="from" className='text-gray-400 text-sm font-semibold'>From</label>
                            <br />
                            <input type="date" onBlur={handleBlur} name="from" id="" className='bg-gray-200 w-full h-10 rounded  px-2 focus:outline-gray-300 focus:border-gray-300'/>
                        </div>
                        <div className='px-4 w-1/2'>
                            <label htmlFor="to" className='text-gray-400 text-sm font-semibold'>To</label>
                            <br />
                            <input type="date" onBlur={handleBlur} name="to" id="" className='bg-gray-200 w-full h-10 rounded px-2 focus:outline-gray-300 focus:border-gray-300'/>
                        </div>
                    </div>
                    <div className='px-4 pt-4 pb-2'>
                        <button type='submit' className='bg-amber-400 text-md font-semibold w-full h-10 rounded hover:bg-amber-500'>Start Booking</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Booking;
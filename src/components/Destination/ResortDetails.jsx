/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useContext } from "react";
// import { UserContext } from "../../App";

const ResortDetails = ({ detail, bookingDetails }) => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // const allDetails = {...loggedInUser,
    //     bookingDetails: bookingDetails,
    //     bookingTime: new Date().toLocaleDateString(),
    // };


    const handleBook = () => {
        alert('Your booking is confirmed.Soon we will notify you'); 
    };

    return (
        <div className='md:flex mt-4 mb-6 p-2 w-fit border shadow-md'>
            <div>
                <img src={detail.imgUrl} alt="" className='h-40 md:w-52 w-72' />
            </div>
            <div className='md:px-8 max-md:pt-4'>
                <p className='font-semibold text-md'>{detail.ResortTitle}</p>
                <div className='flex text-sm text-gray-500 py-2'>
                    <p className='mr-3'>{detail.specification.guest} guests</p>
                    <p className='mr-3'>{detail.specification.rooms} bedrooms</p>
                    <p className='mr-3'>{detail.specification.beds} beds</p>
                    <p>{detail.specification.bathrooms} baths</p>
                </div>
                <p className='text-sm text-gray-500 pb-2'>{detail.features[0]}</p>
                <p className='text-sm text-gray-500'>{detail.features[1]}</p>
                <div className='flex items-center justify-between py-2'>
                    <p className='text-sm text-gray-500'><span className='text-amber-400 px-1'><FontAwesomeIcon icon={faStar} /></span>{detail.ratings} &#40;{detail.totalRating}&#41;</p>
                    <p className='font-semibold text-md '>&#36;{detail.price}</p>
                    <button onClick={handleBook} className='bg-amber-400 py-1 px-3 rounded font-semibold text-md'>Book</button>
                </div>
            </div>
        </div>
    );
};

export default ResortDetails;



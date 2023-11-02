import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import hotelsInfo from '../../fakeData/hotelsInfo';
import mapInfo from '../../fakeData/mapInfo';
import ResortDetails from './ResortDetails';

const Destination = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const { bookingDetails } = state;
    
    const [destinationInfo, setDestinationInfo] = useState([]);
    const [mapDetails, setMapDetails] = useState([]);

    useEffect(() => {
        const info = hotelsInfo.filter(item => item.id === id);
        setDestinationInfo(info);

        const mapData = mapInfo.filter(item => item.id === id);
        setMapDetails(mapData);
    }, [])



    return (
        <div className='pt-20 overflow-x-hidden'>
            <Navbar></Navbar>
            <div className='lg:flex w-full xl:px-32 lg:px-12'>
                <div className='lg:w-3/5 w-full max-lg:justify-center max-lg:flex'>
                    <div data-aos="fade-right" data-aos-duration="1500">
                        <p className='text-lg font-bold pt-4 max-md:text-center'>Stay in {bookingDetails?.destination}</p>
                        {
                            destinationInfo.map((detail, index) => <ResortDetails key={index} detail={detail} bookingDetails={bookingDetails}></ResortDetails>)
                        }
                    </div>
                </div>
                <div className='lg:w-2/5 w-full lg:py-16 py-10 xl:px-10 max-lg:justify-center max-lg:flex'>
                    {
                        mapDetails.map(data => {
                            return (
                                <div key={data.id} data-aos="fade-left" data-aos-duration="1500"><iframe src={data.mapSrc} className='sm:h-[500px] min-[320px]:h-[400px] sm:w-[400px]  min-[320px]:w-[300px] border shadow-md'></iframe></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Destination;

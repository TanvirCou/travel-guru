/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/index';
import TourIntroCard from './TourIntroCard';

const TourIntro = ({ data }) => {
    const title = data.title;
    return (
        <div className='md:h-screen w-full md:flex' data-aos="zoom-in" data-aos-duration="1000">
            <div className='md:w-2/5 w-full text-left lg:py-52 md:py-56 pt-40 lg:px-20 md:px-8 sm:px-32 min-[320px]:px-20'>
                <p className="text-white xl:text-6xl lg:text-5xl text-4xl max-md:text-5xl font-bold pb-5">{title}</p>
                <p className="text-white text-md font-semibold text-left py-6">{data.desc}</p>
                <button className='bg-amber-400 py-2 px-4 rounded font-semibold text-lg'><Link to={`/booking/${data.id}`}>Booking</Link></button>
            </div>
            <div className='md:w-3/5 w-full flex xl:py-48 lg:py-52 md:py-60 py-20 lg::px-20 md:px-0 sm:px-12 justify-center'>
                {
                    fakeData.map(data => <TourIntroCard key={data.id} title={title} data={data}></TourIntroCard>)
                }
            </div>
        </div>
    );
};

export default TourIntro;
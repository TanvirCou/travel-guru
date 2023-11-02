import Navbar from '../Navbar/Navbar';
import './Home.css';
import fakeData from '../../fakeData/index';
import TourIntro from './TourIntro';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Home = () => {

    return (
        <div className='bgImg'>
            <Navbar></Navbar>
            <div>
                <Carousel autoPlay infiniteLoop interval={8000} swipeable={false} showThumbs={false} showStatus={false} transitionTime={2000}>
                    {
                        fakeData.map(data => <TourIntro key={data.id} data={data}></TourIntro>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Home;
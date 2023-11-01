/* eslint-disable react/prop-types */

const TourIntroCard = ({ data, title }) => {
    return (
        <div className={`w-1/3 mx-4 `}>
            <div className={`w-fit relative rounded-3xl ${title === data.title ? 'border-amber-500 border-[5px]' : 'border-gray-500 border-[5px]'}`}>
                <img src={data.imgUrl} alt="" />
                <p className='absolute lg:text-2xl test-lg font-bold text-white lg:bottom-8 bottom-6 left-4'>{data.title}</p>
            </div>
        </div>
    );
};

export default TourIntroCard;
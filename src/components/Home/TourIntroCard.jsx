/* eslint-disable react/prop-types */

const TourIntroCard = ({ data, title }) => {
    return (
        <div className={`w-1/3 sm:mx-4 mx-2 `}>
            <div className={`w-fit relative sm:rounded-3xl rounded-2xl ${title === data.title ? 'border-amber-500 border-[5px]' : 'border-gray-500 border-[5px]'}`}>
                <img src={data.imgUrl} alt="" />
                <p className='absolute lg:text-2xl max-sm:text-xs font-bold text-white lg:bottom-8 sm:bottom-6 bottom-5 sm:left-4 left-2'>{data.title}</p>
            </div>
        </div>
    );
};

export default TourIntroCard;
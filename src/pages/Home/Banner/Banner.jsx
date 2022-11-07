import React from 'react';
import Slider from 'react-slick';
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";


const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", marginRight: '30px', zIndex: "10" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", marginLeft: '30px', zIndex: "10" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className=''>
            <Slider {...settings}>
                <div className='h-[50vh] md:h-[80vh] lg:h-[85vh] w-full bg-gradient-to-l from-gray-600 to-gray-900 rounded-xl'>
                    <img className='w-full h-[50vh] md:h-[80vh] lg:h-[85vh] opacity-40 rounded-xl' src={img1} alt="" />
                    <div className=' absolute top-1/3 ml-5 lg:ml-20 text-white'>
                        <h1 className='text-2xl md:text-3xl lg:text-6xl mb-5 font-semibold'>Wedding <br /> Photography and <br /> Videography</h1>
                        <p className='text-md lg:text-lg'>Capturing the best moments on film, while each time presenting a unique standpoint.</p>
                    </div>
                </div>
                <div className='h-[50vh] md:h-[80vh] lg:h-[85vh] w-full bg-gradient-to-l from-gray-600 to-gray-900 rounded-xl'>
                    <img className='w-full h-[50vh] md:h-[80vh] lg:h-[85vh] opacity-40 rounded-xl' src={img2} alt="" />
                    <div className=' absolute top-1/3 ml-5 lg:ml-20 text-white'>
                        <h1 className='text-2xl md:text-3xl lg:text-6xl mb-5 font-semibold'>RAW  <br /> images and save <br /> money</h1>
                        <p className='text-md lg:text-lg'>If you discard after-edited option for your wedding photos and will take RAW ones, the total price of your potshot will be cut by 15%!</p>
                    </div>
                </div>
                <div className='h-[50vh] md:h-[80vh] lg:h-[85vh] w-full bg-gradient-to-l from-gray-600 to-gray-900 rounded-xl'>
                    <img className='w-full h-[50vh] md:h-[80vh] lg:h-[85vh] opacity-40 rounded-xl' src={img3} alt="" />
                    <div className=' absolute top-1/3 ml-5 lg:ml-20 text-white'>
                        <h1 className='text-2xl md:text-3xl lg:text-6xl mb-5 font-semibold'>Summer  <br /> wedding with your <br /> partner</h1>
                        <p className='text-md lg:text-lg'>you'd like to invite me for a summer wedding photoshoot,</p>
                    </div>
                </div>
            </Slider >
        </div >
    );
};

export default Banner;
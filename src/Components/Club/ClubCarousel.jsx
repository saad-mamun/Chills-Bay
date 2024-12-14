import { Button } from 'antd';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function ClubCarousel() {
 const SliderData = [
        {
            id: 1,
            imgSrc: "image/ClubMan.png",
            heading: "The 90s with Dj Neptune",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            id: 2,
            imgSrc: "image/Slider1.png",
            heading: "Never give up",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            id: 3,
            imgSrc: "image/Slider1.png",
            heading: "Early wake up",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
    ];

    const TagData = [
        {
            id: 1,
            img: "image/Calendar.png",
            title: "Dec 12 2022"
        },
        {
            id: 2,
            img: "image/Mark.png",
            title: "TBS  Lagos"
        },
        {
            id: 3,
            img: "image/Clock.png",
            title: "9:00 PM "
        },
        {
            id: 4,
            img: "image/Tag.png",
            title: "N20,000"
        },
    ]



    // mapping chara dynamic korte chile distructaring korte hoy
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleDotClick = (index) => {
        setCurrentIndex(index)
    }

    const currentSlider = SliderData[currentIndex]

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (
            prevIndex === 0 ? SliderData.length - 1 : prevIndex - 1
        ))
    }
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (
            prevIndex === SliderData.length - 1 ? 0 : prevIndex + 1
        ))
    }

    return (
        <section className='overflow-hidden p-8'>
            <div className='relative w-full max-w-screen-2xl mx-auto'>

                <div className='flex items-center justify-between gap-3'>
                    <button
                        onClick={handlePrev}
                        className='absolute left-0 transform -translate-x-6 flex items-center justify-center w-12 h-12'
                    >
                        <FaArrowLeft />
                    </button>

                    <div className='flex flex-col lg:flex-row items-center gap-6 w-full px-12'>
                        <div className='max-w-[612px] lg:W-1/2'>
                            <h3 className='text-2xl  font-semibold lg:mx-10 text-center lg:text-start'>Tonight In Lagos</h3>
                            <img className='object-cover w-full rounded-xl h-auto' src={currentSlider.imgSrc} alt="" />
                        </div>

                        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                            <h1 className='text-2xl lg:text-5xl font-bold lg:w-[70%] leading-tight'>{currentSlider.heading}</h1>
                            <p className='lg:w-[70%] text-xl'>{currentSlider.desc}</p>

                            <div className='grid grid-cols-2 lg:w-[60%]'>
                                {
                                    TagData.map((data, id) => (
                                        <div className='flex items-start mt-5 mb-5' key={id}>
                                            <img src={data.img} alt="" />
                                            <p className='ms-2 text-lg font-semibold'>{data.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='flex items-center gap-4'>
                               <Button size='large'>Add to cart</Button>
                               <Button type='primary' size='large' >Book Now</Button>
                            </div>

                            <div className='flex items-start gap-3'>
                                <p className='text-xl'>Connect with us on:</p>
                                <div className='flex items-center gap-5'>
                                    <img src="image/Twitter.png" alt="" />
                                    <img src="image/Instagram.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleNext}
                        className='absolute right-0 transform -translate-x-6 flex items-center justify-center w-12 h-12'
                    >
                        <FaArrowRight />
                    </button>
                </div>

                <div className='flex justify-center items-center gap-2 mt-6'>
                    {SliderData.map((_, index) => (
                        <button key={index} onClick={() => handleDotClick(index)} className={`w-3 h-3 rounded-full ${index === currentIndex
                                ? "bg-blue-700"
                                : "bg-gray-200"
                            }`}>

                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ClubCarousel

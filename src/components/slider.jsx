import React from 'react'
import { useState } from 'react'
import '../styles/slide.css';
import { IoIosSend } from "react-icons/io";

import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import '../styles/slider.css'
export default function slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderItems = ['hello', 'good' ];
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1));
      };
  return (
    <div className='slider-sectio mt-8 mb-8 flex justify-center items-center relative'>
         <div className='main-move flex flex-row justify-between items-center w-full absolute'>
            <button href="" className='bg-slate-200'><FaLongArrowAltLeft /></button>
            <button href="" className='bg-slate-200' onClick={handleNext}><FaLongArrowAltRight /></button>
        </div>
        <div className='main-slider-for-slide relative'  style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

        <div className='main-slider bg-sky-400 bg-opacity-60 flex flex-row items-center rounded-md'>
            <div className='slider flex flex-row justify-around items-center'>
                <div className='slide-left flex flex-col gap-3'>
                <div className='text-left-div flex flex-col gap-6 mt-3'>
                    <h1 className=' text-4xl font-bold'>Stay home & get your daily needs from our shop</h1>
                    <p className='flex flex-row gap-2'><h2>Start You r Daily Shopping with </h2> <h3 className='text-green-600'>Nest Mart</h3></p>
                </div>
                <div className='input-slider bg-white mb-8 mt-4 rounded-full flex flex-row justify-between items-center'>
                    <p className='text-2xl ml-3'><IoIosSend /></p>
                    <input type="text" placeholder='your email address' className='border-none outline-none'/>
                    <button className='flex justify-center items-center bg-green-600 rounded-full py-3 px-4 text-white' id='btnn'>Subscribe</button>
                </div>
                </div>
                <div className='slide-right'>
                    <img src="https://freepngimg.com/thumb/vegetable/24646-6-vegetable-photos-thumb.png" alt="" />
                </div>
            </div>
        </div>
        
    
        <div className='main-slider bg-sky-400 bg-opacity-60 flex flex-row items-center rounded-md'>
            <div className='slider flex flex-row justify-around items-center'>
                <div className='slide-left flex flex-col gap-3'>
                <div className='text-left-div flex flex-col gap-6 mt-3'>
                    <h1 className=' text-4xl font-bold'>Stay home & get your daily needs from our shop</h1>
                    <p className='flex flex-row gap-2'><h2>Start You r Daily Shopping with </h2> <h3 className='text-green-600'>Nest Mart</h3></p>
                </div>
                <div className='input-slider bg-white mb-8 mt-4 rounded-full flex flex-row justify-between items-center'>
                    <p className='text-2xl ml-3'><IoIosSend /></p>
                    <input type="text" placeholder='your email address' className='border-none outline-none'/>
                    <button className='flex justify-center items-center bg-green-600 rounded-full py-3 px-4 text-white' id='btnn'>Subscribe</button>
                </div>
                </div>
                <div className='slide-right'>
                    <img src="https://freepngimg.com/thumb/vegetable/24646-6-vegetable-photos-thumb.png" alt="" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

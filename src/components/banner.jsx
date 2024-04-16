import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import '../styles/banner.css';
import { PiShoppingCartLight } from "react-icons/pi";
import { RxStarFilled } from "react-icons/rx";

export default function banner() {
  return (
    <>
    <div className='main-banner-div flex justify-center items-center mt-8 mb-8'>
        <div className='banner flex justify-between items-center'>
            <h1 className='flex text-2xl font-bold'>Deals Of The Day</h1>
            <a href="" className='flex flex-row justify-center items-center gap-1'>All Deals <p><IoIosArrowForward /></p></a>
        </div>
    </div>
    <div className='main-banner-card flex justify-center items-center'>
        <div className='banner-card flex flex-row justify-between items-center mb-8'>
            <div className='each-banner'>
                <div className='banner-img'>
                    <img src="https://avatars.mds.yandex.net/i?id=6770f6603c3c0a72be32bc420c4cf1dea4bc952f-12503309-images-thumbs&n=13" alt="" />
                </div>
                <div className='banner-text flex flex-col items-center gap-2 shadow-2xl rounded-md'>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <p className='flex flex-row justify-start items-center gap-4'><h2 className='text-yellow-600'><RxStarFilled /></h2> <h3>(4.0)</h3></p>
                    <div className='cart-sections flex flex-row gap-1 mb-2'>
                        <h4 className=' text-lg font-bold text-green-500'>$32.85</h4>
                        <del>$33.8</del>
                        <button className='flex flex-row justify-center items-center gap-2 bg-green-200 text-green-800 py-1 rounded-sm'><PiShoppingCartLight /> Add</button>

                    </div>
                </div>
            </div>
            <div className='each-banner'>
                <div className='banner-img'>
                    <img src="https://avatars.mds.yandex.net/i?id=25cc83847de4aa191f2be3e48b2eb10e550c3fbe-9229153-images-thumbs&n=13" alt="" />
                </div>
                <div className='banner-text flex flex-col items-center gap-2 shadow-2xl rounded-md'>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <p className='flex flex-row justify-start items-center gap-4'><h2 className='text-yellow-600'><RxStarFilled /></h2> <h3>(4.0)</h3></p>
                    <div className='cart-sections flex flex-row gap-1 mb-2'>
                        <h4 className=' text-lg font-bold text-green-500'>$32.85</h4>
                        <del>$33.8</del>
                        <button className='flex flex-row justify-center items-center gap-2 bg-green-200 text-green-800 py-1 rounded-sm'><PiShoppingCartLight /> Add</button>

                    </div>
                </div>
            </div>
            <div className='each-banner'>
                <div className='banner-img'>
                    <img src="https://avatars.mds.yandex.net/i?id=f0eb1d30797f8cd431a237dbab9097c5d5eb270f-9041585-images-thumbs&n=13" alt="" />
                </div>
                <div className='banner-text flex flex-col items-center gap-2 shadow-2xl rounded-md'>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <p className='flex flex-row justify-start items-center gap-4'><h2 className='text-yellow-600'><RxStarFilled /></h2> <h3>(4.0)</h3></p>
                    <div className='cart-sections flex flex-row gap-1 mb-2'>
                        <h4 className=' text-lg font-bold text-green-500 '>$32.85</h4>
                        <del>$33.8</del>
                        <button className='flex flex-row justify-center items-center gap-2 bg-green-200 text-green-800 py-1 rounded-sm'><PiShoppingCartLight /> Add</button>

                    </div>
                </div>
            </div>
            <div className='each-banner'>
                <div className='banner-img'>
                    <img src="https://avatars.mds.yandex.net/i?id=e64e15dddd37da288899899164761543c2672ee6-10576886-images-thumbs&n=13" alt="" />
                </div>
                <div className='banner-text flex flex-col items-center gap-2 shadow-2xl rounded-md'>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <p className='flex flex-row justify-start items-center gap-4'><h2 className='text-yellow-600'><RxStarFilled /></h2> <h3>(4.0)</h3></p>
                    <div className='cart-sections flex flex-row gap-1 mb-2'>
                        <h4 className=' text-lg font-bold text-green-500'>$32.85</h4>
                        <del>$33.8</del>
                        <button className='flex flex-row justify-center items-center gap-2 bg-green-200 text-green-800 py-1 rounded-sm '><PiShoppingCartLight /> Add</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

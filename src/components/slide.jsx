import { useState } from 'react'
import '../styles/slide.css';
import { IoIosSend } from "react-icons/io";
import { SiHandshakeProtocol } from "react-icons/si";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";
import { TbBrandAirtable } from "react-icons/tb";
import { TbBrandNem } from "react-icons/tb";
import { BiCycling } from "react-icons/bi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { GiReturnArrow } from "react-icons/gi";


export default function slide() {
    const [url, seturl] = useState('https://avatars.mds.yandex.net/i?id=e5772d8fcd9e119386519fe266c25843e788c9c6-4592954-images-thumbs&n=13')
  return (
    <>
    <div className='slider-section mt-8 mb-8 flex justify-center items-center'>
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


    {/* ////////////////////////////// create a new section /// */}

    <div className='flex mt-8 justify-center items-center mb-4'>
        <div className='icons-sec flex flex-row justify-between items-center'>
            <div className='icon flex flex-row items-center bg-gray-300 py-8 rounded-md'>
                <div className='icon-img'>
                    <h1 className=' text-yellow-600 text-5xl'><SiHandshakeProtocol /></h1>
                </div>
                <div className='icon-text'>
                    <h2 className=' font-bold'>Best prices & offers</h2>
                    <p className=' text-slate-800'>Orders $50 or more</p>
                </div>
            </div>
            <div className='icon flex flex-row items-center bg-orange-300 py-8 rounded-md'>
                <div className='icon-img'>
                    <h1 className=' text-yellow-600 text-5xl'><GiReturnArrow /></h1>
                </div>
                <div className='icon-text'>
                    <h2 className=' font-bold'>Easy returns</h2>
                    <p className=' text-slate-800'>Within 30 days</p>
                </div>
            </div>
            <div className='icon flex flex-row items-center bg-purple-300 py-8 rounded-md'>
                <div className='icon-img'>
                    <h1 className=' text-yellow-600 text-5xl'><LiaFileInvoiceDollarSolid /></h1>
                </div>
                <div className='icon-text'>
                    <h2 className=' font-bold'>Great daily deal</h2>
                    <p className=' text-slate-800'>When you sign up</p>
                </div>
            </div>
            <div className='icon flex flex-row items-center bg-red-300 py-8 rounded-md'>
                <div className='icon-img'>
                    <h1 className=' text-yellow-600 text-5xl'><LuHeartHandshake /></h1>
                </div>
                <div className='icon-text'>
                    <h2 className=' font-bold'>Wide assortment</h2>
                    <p className=' text-slate-800'>Mega Discounts</p>
                </div>
            </div>
            <div className='icon flex flex-row items-center bg-pink-300 py-8 rounded-md'>
                <div className='icon-img'>
                    <h1 className=' text-yellow-600 text-5xl'><BiCycling /></h1>
                </div>
                <div className='icon-text'>
                    <h2 className=' font-bold'>Free delivery</h2>
                    <p className=' text-slate-800'>24/7 amazing services</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

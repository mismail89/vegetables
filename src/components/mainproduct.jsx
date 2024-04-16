import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import '../styles/product.css';
import { IoMdStar } from "react-icons/io";
import '../styles/mainproduct.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


export default function mainproduct() {
  return (
    <>
     <div className='product-nsv mb-8 flex flex-row justify-around items-center mt-8'>
        <h1 className='text-2xl font-bold'>Daily Best Sells</h1>
        <div className='flex flex-row justify-center items-center gap-6'>
            <a href="" className='text-green-500'>Featured</a>
            <a href="">Popular</a>
            <a href="">New added</a>
        </div>
    </div>
    <div className='mt-8 w-full mb-8'>
        <div className='main-post max-w-full flex flex-row justify-around items-center'>
            <div className='left-post bg-pink-200 py-8 rounded-md'>
                <div className='left-text-div'>
                    <h1 className=' text-3xl font-bold'>Bring nature into your home</h1>
                    <a href="" className='mt-8 flex flex-row items-center px-2 py-2 bg-green-700 text-white gap-2 w-1/2 rounded-md'>Shop Now <p className='flex justify-center items-center'><FaLongArrowAltRight /></p> </a>
                </div>
                <div className='post-img'>
                    <img src="https://freepngimg.com/thumb/broccoli/1-green-broccoli-png-image-thumb.png" alt="" />
                </div>
            </div>
            <div className='right-post-div flex flex-row justify-around items-center relative'>
                <div className='arrows'>
                    <a href="" className='bg-slate-200 hover:text-lg hover:bg-slate-400'><FaArrowLeft /></a>
                    <a href="" className='bg-slate-200 hover:text-lg hover:bg-slate-400'><FaArrowRight /></a>
                </div>
                <div className='each-post flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-green-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/vegetable/2-2-vegetable-png-clipart-thumb.png" alt="" />
                </div>
                <div className='post-text flex flex-col w-11/12'>
                    <h3>Hodo Foods</h3>
                    <h1 className=' font-bold'>All Natural Italian-Style Chicken Meatballs</h1>
                    <p className='text-yellow-600'><IoMdStar /></p>
                    <div className='price flex flex-row items-center gap-3'>
                        <h2 className='text-lg font-bold text-green-600'>$238.85</h2>
                        <del>$245.8</del>
                    </div>
                    <div className='range bg-slate-300'>
                        <div className='bg-green-400'></div>
                    </div>
                    <p>Sold: 90/120</p>
                    <button className='mb-2 px-2 py-2 bg-green-500 text-white rounded-sm'>Add To Cart</button>
                </div>
                </div>
                <div className='each-post flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-green-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/vegetable/9-2-vegetable-free-download-png-thumb.png" alt="" />
                </div>
                <div className='post-text flex flex-col w-11/12'>
                    <h3>Hodo Foods</h3>
                    <h1 className=' font-bold'>All Natural Italian-Style Chicken Meatballs</h1>
                    <p className='text-yellow-600'><IoMdStar /></p>
                    <div className='price flex flex-row items-center gap-3'>
                        <h2 className='text-lg font-bold text-green-600'>$238.85</h2>
                        <del>$245.8</del>
                    </div>
                    <div className='range bg-slate-300'>
                        <div className='bg-green-400'></div>
                    </div>
                    <p>Sold: 90/120</p>
                    <button className='mb-2 px-2 py-2 bg-green-500 text-white rounded-sm'>Add To Cart</button>
                </div>
                </div>
                <div className='each-post flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-green-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/vegetable/4-2-vegetable-picture-thumb.png" alt="" />
                </div>
                <div className='post-text flex flex-col w-11/12'>
                    <h3>Hodo Foods</h3>
                    <h1 className=' font-bold'>Foster Farms Takeout Crispy Classic</h1>
                    <p className='text-yellow-600'><IoMdStar /></p>
                    <div className='price flex flex-row items-center gap-3'>
                        <h2 className='text-lg font-bold text-green-600'>$238.85</h2>
                        <del>$245.8</del>
                    </div>
                    <div className='range bg-slate-300'>
                        <div className='bg-green-400'></div>
                    </div>
                    <p>Sold: 90/120</p>
                    <button className='mb-2 px-2 py-2 bg-green-500 text-white rounded-sm'>Add To Cart</button>
                </div>
                </div>
                <div className='each-post flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-green-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/tomato/3-tomato-png-image-picture-download-thumb.png" alt="" />
                </div>
                <div className='post-text flex flex-col w-11/12'>
                    <h3>Hodo Foods</h3>
                    <h1 className=' font-bold'>Angie s Boomchickapop Sweet and womnies</h1>
                    <p className='text-yellow-600'><IoMdStar /></p>
                    <div className='price flex flex-row items-center gap-3'>
                        <h2 className='text-lg font-bold text-green-600'>$238.85</h2>
                        <del>$245.8</del>
                    </div>
                    <div className='range bg-slate-300'>
                        <div className='bg-green-400'></div>
                    </div>
                    <p>Sold: 90/120</p>
                    <button className='mb-2 px-2 py-2 bg-green-500 text-white rounded-sm'>Add To Cart</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

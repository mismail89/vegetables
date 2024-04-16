import React from 'react'
import '../styles/product.css';
import { IoCartOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";

export default function product() {
  return (
    <>
    <div className='product-nsv mb-8 flex flex-row justify-around items-center'>
        <h1 className='text-2xl font-bold'>Popular Products</h1>
        <div className='flex flex-row justify-center items-center gap-6'>
            <a href="" className='text-green-500'>All</a>
            <a href="">Milks & Dairies</a>
            <a href="">Coffes & Teas</a>
            <a href="">Pet Foods</a>
            <a href="">Meats</a>
            <a href="">Vegetables</a>
            <a href="">Fruits</a>
        </div>
    </div>

    <div className='mains-products mb-4 flex justify-center items-center'>
        <div className='all-products-main'>
        <div className='products-all-div flex flex-row justify-around items-center gap-4'>
            <div className='each-product flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-green-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/vegetable/6-2-vegetable-png-thumb.png" alt="" />
                </div>
                <div className='pro-text flex flex-col justify-around items-start'>
                    <h3>Snack</h3>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <h2 className='flex mt-2 flex-row justify-center items-center gap-8 text-yellow-600'><IoMdStar /> <strong>(4.0)</strong></h2>
                    <h4 className='flex flex-row justify-center items-center gap-1'>By <p className='text-green-400'>NestFood</p></h4>
                </div>
                <div className='pro-btn flex mb-2 mt-2 flex-row justify-center items-center gap-2'>
                    <h1 className='text-green-500 text-lg font-bold'>$28.85</h1>
                    <del>$32.8</del>
                    <a href="" className='flex flex-row justify-center items-center gap-2 py-2 px-4 bg-slate-200 text-green-400'><IoCartOutline /> Add</a>
                </div>
            </div>
            <div className='each-product flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-green-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/cabbage/6-cabbage-png-image-thumb.png" alt="" />
                </div>
                <div className='pro-text flex flex-col justify-around items-start'>
                    <h3>Snack</h3>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <h2 className='flex mt-2 flex-row justify-center items-center gap-8 text-yellow-600'><IoMdStar /> <strong>(4.0)</strong></h2>
                    <h4 className='flex flex-row justify-center items-center gap-1'>By <p className='text-green-400'>NestFood</p></h4>
                </div>
                <div className='pro-btn flex mb-2 mt-2 flex-row justify-center items-center gap-2'>
                    <h1 className='text-green-500 text-lg font-bold'>$28.85</h1>
                    <del>$32.8</del>
                    <a href="" className='flex flex-row justify-center items-center gap-2 py-2 px-4 bg-slate-200 text-green-400'><IoCartOutline /> Add</a>
                </div>
            </div>
            <div className='each-product flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-green-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/vegetable/24646-6-vegetable-photos-thumb.png" alt="" />
                </div>
                <div className='pro-text flex flex-col justify-around items-start'>
                    <h3>Snack</h3>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <h2 className='flex mt-2 flex-row justify-center items-center gap-8 text-yellow-600'><IoMdStar /> <strong>(4.0)</strong></h2>
                    <h4 className='flex flex-row justify-center items-center gap-1'>By <p className='text-green-400'>NestFood</p></h4>
                </div>
                <div className='pro-btn flex mb-2 mt-2 flex-row justify-center items-center gap-2'>
                    <h1 className='text-green-500 text-lg font-bold'>$28.85</h1>
                    <del>$32.8</del>
                    <a href="" className='flex flex-row justify-center items-center gap-2 py-2 px-4 bg-slate-200 text-green-400'><IoCartOutline /> Add</a>
                </div>
            </div>
            <div className='each-product flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-green-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/vegetable/4-2-vegetable-picture-thumb.png" alt="" />
                </div>
                <div className='pro-text flex flex-col justify-around items-start'>
                    <h3>Snack</h3>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <h2 className='flex mt-2 flex-row justify-center items-center gap-8 text-yellow-600'><IoMdStar /> <strong>(4.0)</strong></h2>
                    <h4 className='flex flex-row justify-center items-center gap-1'>By <p className='text-green-400'>NestFood</p></h4>
                </div>
                <div className='pro-btn flex mb-2 mt-2 flex-row justify-center items-center gap-2'>
                    <h1 className='text-green-500 text-lg font-bold'>$28.85</h1>
                    <del>$32.8</del>
                    <a href="" className='flex flex-row justify-center items-center gap-2 py-2 px-4 bg-slate-200 text-green-400'><IoCartOutline /> Add</a>
                </div>
            </div>
            <div className='each-product flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-green-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/vegetable/2-2-vegetable-png-clipart-thumb.png" alt="" />
                </div>
                <div className='pro-text flex flex-col justify-around items-start'>
                    <h3>Snack</h3>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <h2 className='flex mt-2 flex-row justify-center items-center gap-8 text-yellow-600'><IoMdStar /> <strong>(4.0)</strong></h2>
                    <h4 className='flex flex-row justify-center items-center gap-1'>By <p className='text-green-400'>NestFood</p></h4>
                </div>
                <div className='pro-btn flex mb-2 mt-2 flex-row justify-center items-center gap-2'>
                    <h1 className='text-green-500 text-lg font-bold'>$28.85</h1>
                    <del>$32.8</del>
                    <a href="" className='flex flex-row justify-center items-center gap-2 py-2 px-4 bg-slate-200 text-green-400'><IoCartOutline /> Add</a>
                </div>
            </div>
        </div>
        <div className='products-all-div flex flex-row justify-around items-center gap-4'>
            <div className='each-product flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-blue-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/vegetable/9-2-vegetable-free-download-png-thumb.png" alt="" />
                </div>
                <div className='pro-text flex flex-col justify-around items-start'>
                    <h3>Snack</h3>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <h2 className='flex mt-2 flex-row justify-center items-center gap-8 text-yellow-600'><IoMdStar /> <strong>(4.0)</strong></h2>
                    <h4 className='flex flex-row justify-center items-center gap-1'>By <p className='text-green-400'>NestFood</p></h4>
                </div>
                <div className='pro-btn flex mb-2 mt-2 flex-row justify-center items-center gap-2'>
                    <h1 className='text-green-500 text-lg font-bold'>$28.85</h1>
                    <del>$32.8</del>
                    <a href="" className='flex flex-row justify-center items-center gap-2 py-2 px-4 bg-slate-200 text-green-400'><IoCartOutline /> Add</a>
                </div>
            </div>
            <div className='each-product flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-green-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/vegetable/8-2-vegetable-png-picture-thumb.png" alt="" />
                </div>
                <div className='pro-text flex flex-col justify-around items-start'>
                    <h3>Snack</h3>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <h2 className='flex mt-2 flex-row justify-center items-center gap-8 text-yellow-600'><IoMdStar /> <strong>(4.0)</strong></h2>
                    <h4 className='flex flex-row justify-center items-center gap-1'>By <p className='text-green-400'>NestFood</p></h4>
                </div>
                <div className='pro-btn flex mb-2 mt-2 flex-row justify-center items-center gap-2'>
                    <h1 className='text-green-500 text-lg font-bold'>$28.85</h1>
                    <del>$32.8</del>
                    <a href="" className='flex flex-row justify-center items-center gap-2 py-2 px-4 bg-slate-200 text-green-400'><IoCartOutline /> Add</a>
                </div>
            </div>
            <div className='each-product flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-purple-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/corn/3-corn-png-image-thumb.png" alt="" />
                </div>
                <div className='pro-text flex flex-col justify-around items-start'>
                    <h3>Snack</h3>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <h2 className='flex mt-2 flex-row justify-center items-center gap-8 text-yellow-600'><IoMdStar /> <strong>(4.0)</strong></h2>
                    <h4 className='flex flex-row justify-center items-center gap-1'>By <p className='text-green-400'>NestFood</p></h4>
                </div>
                <div className='pro-btn flex mb-2 mt-2 flex-row justify-center items-center gap-2'>
                    <h1 className='text-green-500 text-lg font-bold'>$28.85</h1>
                    <del>$32.8</del>
                    <a href="" className='flex flex-row justify-center items-center gap-2 py-2 px-4 bg-slate-200 text-green-400'><IoCartOutline /> Add</a>
                </div>
            </div>
            <div className='each-product flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-yellow-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/vegetable/4-2-vegetable-picture-thumb.png" alt="" />
                </div>
                <div className='pro-text flex flex-col justify-around items-start'>
                    <h3>Snack</h3>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <h2 className='flex mt-2 flex-row justify-center items-center gap-8 text-yellow-600'><IoMdStar /> <strong>(4.0)</strong></h2>
                    <h4 className='flex flex-row justify-center items-center gap-1'>By <p className='text-green-400'>NestFood</p></h4>
                </div>
                <div className='pro-btn flex mb-2 mt-2 flex-row justify-center items-center gap-2'>
                    <h1 className='text-green-500 text-lg font-bold'>$28.85</h1>
                    <del>$32.8</del>
                    <a href="" className='flex flex-row justify-center items-center gap-2 py-2 px-4 bg-slate-200 text-green-400'><IoCartOutline /> Add</a>
                </div>
            </div>
            <div className='each-product flex flex-col'>
                <div className='pro-header'>
                    <h1 className=' bg-pink-500'>Sale</h1>
                </div>
                <div className='pro-img'>
                    <img src="https://freepngimg.com/thumb/vegetable/2-2-vegetable-png-clipart-thumb.png" alt="" />
                </div>
                <div className='pro-text flex flex-col justify-around items-start'>
                    <h3>Snack</h3>
                    <h1 className='mt-2 font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
                    <h2 className='flex mt-2 flex-row justify-center items-center gap-8 text-yellow-600'><IoMdStar /> <strong>(4.0)</strong></h2>
                    <h4 className='flex flex-row justify-center items-center gap-1'>By <p className='text-green-400'>NestFood</p></h4>
                </div>
                <div className='pro-btn flex mb-2 mt-2 flex-row justify-center items-center gap-2'>
                    <h1 className='text-green-500 text-lg font-bold'>$28.85</h1>
                    <del>$32.8</del>
                    <a href="" className='flex flex-row justify-center items-center gap-2 py-2 px-4 bg-slate-200 text-green-400'><IoCartOutline /> Add</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

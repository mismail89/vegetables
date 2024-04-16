import React from 'react'
import '../styles/menu.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function menu() {
  return (
    <>
    <div className="menu flex flex-row justify-around items-center mt-8">
        <div className='menu-links'>
            <h1 className='text-2xl'>Featured Categories</h1>
            <a href="">Cake & Milk</a>
            <a href="">Coffes & Teas</a>
            <a href="" className=' text-green-400'>Pet Foods</a>
            <a href="">Vegetables</a>
        </div>
        <div className='arrow flex flex-row justify-around items-center gap-4'>
            <a href="" className='bg-slate-200 text-slate-500'><FaLongArrowAltLeft /></a>
            <a href="" className='bg-slate-200 text-slate-500'><FaLongArrowAltRight /></a>
        </div>
    </div>
    <div className='main-product mt-8 flex justify-center items-center'>
        <div className='product-div flex flex-row justify-around items-center'>
            <div className='product bg-blue-100 rounded-lg'>
                <div className='product-img'>
                    <img src="https://freepngimg.com/thumb/peach/3-peach-png-image-thumb.png" alt="" />
                </div>
                <div className='product-text'>
                    <h2>Peach</h2>
                    <p>14 Items</p>
                </div>
            </div>
            <div className='product bg-teal-100 rounded-lg'>
                <div className='product-img'>
                    <img src="https://freepngimg.com/thumb/cabbage/6-cabbage-png-image-thumb.png" alt="" />
                </div>
                <div className='product-text'>
                    <h2>Cabbage</h2>
                    <p>14 Items</p>
                </div>
            </div>
            <div className='product bg-violet-100 rounded-lg'>
                <div className='product-img'>
                    <img src="https://freepngimg.com/thumb/tomato/6-tomato-png-image-thumb.png" alt="" />
                </div>
                <div className='product-text'>
                    <h2>Tomato</h2>
                    <p>14 Items</p>
                </div>
            </div>
            <div className='product bg-purple-100 rounded-lg'>
                <div className='product-img'>
                    <img src="https://freepngimg.com/thumb/broccoli/12-broccoli-png-image-with-transparent-background-thumb.png" alt="" />
                </div>
                <div className='product-text'>
                    <h2>Brococoli</h2>
                    <p>14 Items</p>
                </div>
            </div>
            <div className='product bg-fuchsia-100 rounded-lg'>
                <div className='product-img'>
                    <img src="https://freepngimg.com/thumb/cucumber/11-cucumber-png-image-picture-download-thumb.png" alt="" />
                </div>
                <div className='product-text'>
                    <h2>Cucumber</h2>
                    <p>14 Items</p>
                </div>
            </div>
            <div className='product bg-pink-100 rounded-lg'>
                <div className='product-img'>
                    <img src="https://freepngimg.com/thumb/broccoli/1-green-broccoli-png-image-thumb.png" alt="" />
                </div>
                <div className='product-text'>
                    <h2>Green Brococoli</h2>
                    <p>14 Items</p>
                </div>
            </div>
            <div className='product bg-rose-100 rounded-lg'>
                <div className='product-img'>
                    <img src="https://freepngimg.com/thumb/onion/10-red-onion-png-image-thumb.png" alt="" />
                </div>
                <div className='product-text'>
                    <h2>Red Onion</h2>
                    <p>14 Items</p>
                </div>
            </div>
            <div className='product bg-blue-100 rounded-lg'>
                <div className='product-img'>
                    <img src="https://freepngimg.com/thumb/pepper/1-red-pepper-png-image-thumb.png" alt="" />
                </div>
                <div className='product-text'>
                    <h2>Red Pepper</h2>
                    <p>14 Items</p>
                </div>
            </div>
            <div className='product bg-blue-100 rounded-lg'>
                <div className='product-img'>
                    <img src="https://freepngimg.com/thumb/healthy_food/4-2-healthy-food-png-file-thumb.png" alt="" />
                </div>
                <div className='product-text'>
                    <h2>Healthy Food</h2>
                    <p>14 Items</p>
                </div>
            </div>
            <div className='product bg-blue-100 rounded-lg'>
                <div className='product-img'>
                    <img src="https://freepngimg.com/thumb/pepper/13-pepper-png-image-thumb.png" alt="" />
                </div>
                <div className='product-text'>
                    <h2>Pepper</h2>
                    <p>14 Items</p>
                </div>
            </div>
          
            
           
        </div>
    </div>
    <div className='card-main mt-8 flex justify-center items-center mb-8'>
        <div className='card-div flex flex-row justify-around items-center'>
            <div className='card bg-pink-300 flex flex-row justify-between items-center py-8'>
            <div className='card-text'>
                <h1>Everyday Fresh &Clean with Our Products</h1>
                <button className='py-2 px-6 text-white bg-green-600 rounded-md'>Shop Now</button>
            </div>
            <div className='card-img'>
                <img src="https://freepngimg.com/thumb/vegetable/6-2-vegetable-png-thumb.png" alt="" />
            </div>
            </div>
            <div className='card bg-purple-300 flex flex-row justify-between items-center py-8'>
            <div className='card-text'>
                <h1>Make your Breakfast Healthy and Easy</h1>
                <button className='py-2 px-6 text-white bg-green-600 rounded-md'>Shop Now</button>
            </div>
            <div className='card-img'>
                <img src="https://freepngimg.com/thumb/vegetable/2-2-vegetable-png-clipart-thumb.png" alt="" />
            </div>
            </div>
            <div className='card bg-orange-300 flex flex-row justify-between items-center py-8'>
            <div className='card-text'>
                <h1>The best Organic Products Online</h1>
                <button className='py-2 px-6 text-white bg-green-600 rounded-md'>Shop Now</button>
            </div>
            <div className='card-img'>
                <img src="https://freepngimg.com/thumb/vegetable/4-2-vegetable-picture-thumb.png" alt="" />
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

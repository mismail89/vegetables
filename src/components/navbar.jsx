import React from 'react'
import '../styles/navbar.css';
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { TfiReload } from "react-icons/tfi";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { FaGripfire } from "react-icons/fa";


export default function navbar() {
  return (
    <>
    <div className='top-nav flex flex-row justify-around items-center bg-slate-200 py-3'>
        <div className='left-top flex flex-row justify-arround items-center'>
            <a href="">About Us</a> <div></div>
            <a href="">My Account</a> <div></div>
            <a href="">Wishlist</a> <div></div>
            <a href="">Order Tracking</a>
        </div>
        <div className='right-top flex flex-row justify-end gap-2 items-center'>
            <a href="">Need help?</a>
            <a href="" className='flex flex-row'>Call Us: <p className='text-green-400'>+ 1800 900</p></a><div></div>
            <a href="">English</a><div></div>
            <a href="">Usd</a><div></div>
        </div>
    </div>
    <div className=' bg-slate-500 mt-1' id='hr'></div>


    <div className='search-nav flex flex-row justify-around items-center mt-2'>
        <div className='first-search'>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTyUkAo28Px40ezwrqsrGkGHNOeV6eRpeS6JmlfNMzvWoQalsOh" alt="" />
        </div>
        <div className='second-search flex flex-row'>
            <div className='search-box flex flex-row py-3'>
                <a href="" className='flex flex-row justify-around items-center gap-1' id='categaries'>All Categories <IoIosArrowDown /></a>
                <div></div>
                <input type="text" placeholder='search for items....' className=' border-none outline-none'/>
                <a href=""><FaSearch /></a>
            </div>
        </div>
        <div className='search-locat flex flex-row justify-between items-center'>
            <a href="" className='flex flex-row justify-center items-center gap-1 py-2 px-2'><ImLocation2 /> <p className='text-green-600'>Location</p> <IoIosArrowDown /></a>
        </div>
        <div className='last-search flex flex-row'>
            <a href="" className='flex flex-row gap-1 justify-arround items-center relative'><TfiReload /> Compare <p className=' bg-green-600 rounded-full text-white '>3</p></a>
            <a href="" className='flex flex-row gap-1 justify-arround items-center relative'><CiHeart /> Wishliast <p className=' bg-green-600 rounded-full text-white '>3</p></a>
            <a href="" className='flex flex-row gap-1 justify-arround items-center relative'><IoCartOutline /> Cart <p className=' bg-green-600 rounded-full text-white '>3</p></a>
            <a href="" className='flex flex-row gap-1 justify-arround items-center relative'><IoMdPerson /> Account </a>
        </div>
    </div>

    <div className='lasr-navbar-sec flex flex-row justify-around items-center mt-8'>
        <div className='first-link-div'>
            <a href="" className='flex flex-row justify-around items-center gap-2 bg-green-600 text-white py-2 px-2'><MdOutlineDashboard /> Browse All Categories <IoIosArrowDown /></a>
        </div>
        <div className='second-link-div flex flex-row justify-around items-center'>
            <a href="" className='flex flex-row gap-1 justify-center items-center'><p className=' text-green-500'><FaGripfire /></p> Deals</a>
            <a href="" className=' text-green-600'>Home</a>
            <a href="">About</a>
            <a href="" className='flex flex-row gap-1 justify-center items-center '>Shop <p className=' mt-2'><IoIosArrowDown /></p></a>
            <a href="" className='flex flex-row gap-1 justify-center items-center'>Vendors <p className=' mt-2'><IoIosArrowDown /></p></a>
            <a href="" className='flex flex-row gap-1 justify-center items-center'>Mega Menu <p className=' mt-2'><IoIosArrowDown /></p></a>
            <a href="" className='flex flex-row gap-1 justify-center items-center'>Blog <p className=' mt-2'><IoIosArrowDown /></p></a>
            <a href="" className='flex flex-row gap-1 justify-center items-center text-center'>Pages <p className=' mt-2'><IoIosArrowDown /></p></a>
            <a href="" className='flex flex-row gap-1 justify-center items-center'>Contact</a>
        </div>
        <div className='third-link-div flex flex-row justify-around items-center gap-2'>
            <div className='text-2xl'><FaHeadphonesAlt /></div>
            <div>
                <h1 className='text-2xl text-green-600'>1900 - 888</h1>
                <p className='text-sm'>24/7 Support Center</p>
            </div>
        </div>
    </div>
    
    </>
  )
}

import React from 'react'
import '../styles/footer.css';
import { FaLocationDot } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export default function footer() {
  return (
    <>
    <div className='main-footer flex w-full mt-8 justify-center'>
        <div className='footer flex flex-row justify-between items-center'>
            <div className='footer-left flex-col'>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTyUkAo28Px40ezwrqsrGkGHNOeV6eRpeS6JmlfNMzvWoQalsOh" alt="" />
                <p className='flex flex-row'>Awesome grocery store website</p>
                <p className='flex flex-row gap-1'><h1 className='text-green-600 text-xl'><FaLocationDot /></h1>Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                <p className='flex flex-row  gap-1'><h1 className='text-green-600 text-xl'><CiHeadphones /></h1>Call Us:(+91) 540 025 124553</p>
                <p className='flex flex-row gap-1'><h1 className='text-green-600 text-xl'><FiSend /></h1>
Email:sale@Nest.com</p>
                <p className='flex flex-row gap-1'><h1 className='text-green-600 text-xl'><IoMdTime /></h1>Hours:10:00 18:00, Mon Sat</p>
            </div>
            <div className='footer-right flex flex-row justify-between '>
                <div className='first-footerlink'>
                    <h1>Company</h1>
                    <a href="">About Us</a>
                    <a href="">Delivery Information</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Careers</a>
                    <a href="">Contact Us</a>
                    <a href="">Support Center</a>
                </div>
                <div>
                <h1>Account</h1>
                    <a href="">Sign In</a>
                    <a href="">View Cart</a>
                    <a href="">My Wishlist</a>
                    <a href="">Track My Order</a>
                    <a href="">Help Ticket</a>
                    <a href="">Shipping Details</a>
                    <a href="">Compare products</a>
                </div>
                <div>
                <h1>Corporate</h1>
                    <a href="">Become a Vendor</a>
                    <a href="">Affiliate Program</a>
                    <a href="">Farm Business</a>
                    <a href="">Farm Careers</a>
                    <a href="">Our Suppliers</a>
                    <a href="">Accessibility</a>
                    <a href="">Promotions</a>
                </div>
                <div>
                <h1>Popular</h1>
                    <a href="">Milk & Flavoured Milk</a>
                    <a href="">Butter and Margarine</a>
                    <a href="">Eggs Substitutes</a>
                    <a href="">Marmalades</a>
                    <a href="">Sour Cream and Dips</a>
                    <a href="">Tea & Kombucha</a>
                    <a href="">Cheese</a>
                </div>
                <div>
                    <h1>Install App</h1>
                    <p>From App store or Google play</p>
                    <h2 className=' flex flex-row justify-start items-start gap-1'>
                        <img src="https://avatars.mds.yandex.net/i?id=25e0dc99aaf7389c7ff4057e87916c2f01ad6451-4230038-images-thumbs&n=13" alt="" />
                        <img src="https://avatars.mds.yandex.net/i?id=de20dcff95d2af3b3014d6bde23582e354fdfbc8-12752860-images-thumbs&n=13" alt="" />

                    </h2>
                    <p>Secured Payment</p>
                    <h2 className='master-cards flex flex-row justify-start items-start gap-1'>
                        <img src="https://avatars.mds.yandex.net/i?id=8f406800b9cd60ad4be61705f4869308541137d9-12598198-images-thumbs&n=13" alt=""/>
                        <img src="https://avatars.mds.yandex.net/i?id=1b10fe25d9dcb02f4ffe3e365cdab9c5822144e3-5339669-images-thumbs&n=13" alt="" />
                        <img src="https://avatars.mds.yandex.net/i?id=4d23311480c660149d9feafe9b3ce7ac8b945ef4-5905711-images-thumbs&n=13" alt="" />
                    </h2>
                </div>
            </div>
        </div>
    </div>
    <div className='line-footer mt-12 mb-4 flex justify-center items-center'>
        <div className=' bg-green-400'></div>
    </div>
    <div className='last-footer-section flex flexx-row justify-center items-center mb-4'>
        <div className='last-footer flex flex-row justify-between items-center'>
            <div className='footre-sec'>
                <a href=""><p>© 2024, Developer</p></a>
            </div>
            <div className='footre-sec flex flex-row justify-between items-center'>
                <div className=' flex flex-row justify-center items-center gap-2'>
                    <h4 className=' text-xl'> <FiPhoneCall /></h4>
                    <h3>
                        <h1 className=' text-green-500 text-xl'>1900 - 6666</h1>
                        <p>Working 8:00 22:00</p>
                    </h3>
                </div>
                <div className=' flex flex-row justify-center items-center gap-2'>
                    <h4 className=' text-xl'> <FiPhoneCall /></h4>
                    <h3>
                        <h1 className=' text-green-500 text-xl'>1900 - 8888</h1>
                        <p>24/7 Support Center</p>
                    </h3>
                </div>
            </div>
            <div className='footre-sec flex flex-col justify-center items-center'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <h2>Follow Us</h2>
                    <a href="" className=' text-lg text-green-700'><FaFacebookSquare /></a>
                    <a href="" className=' text-lg text-green-700'><FaInstagramSquare /></a>
                    <a href="" className=' text-lg text-green-700'><FaYoutube /></a>
                    <a href="" className=' text-lg text-green-700'><FaSquareXTwitter /></a>
                </div>
                <p>Up to 15% discount on your first subscribe</p>
            </div>
        </div>
    </div>
    </>
  )
}

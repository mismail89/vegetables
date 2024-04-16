import React from 'react'
import Navbar from './components/navbar'
import Menu from './components/menu';
import Product from './components/product';
import Mainproduct from './components/mainproduct';
import Banner from './components/banner';
import Lastsection from './components/lastsection';
import Slide from './components/slide';
import Footer from './components/footer';
import Slider from './components/slider';
export default function App() {
  return (
    <>
    <Navbar />
    <Slider />
    <Menu />
    <Product />
    <Mainproduct />
    <Banner />
    <Lastsection />
    <Slide />
    <Footer />
    </>
  )
}

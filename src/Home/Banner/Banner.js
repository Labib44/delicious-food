import React from 'react';
import mutton from '../../Assets/img/mutton-biryani-.jpg'
import boneless from '../../Assets/img/boneless-chicken-biryani-.jpg'
import chicken from '../../Assets/img/chicken-fried-biryani-.jpg'
import hyderabadi from '../../Assets/img/hyderabadi.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img w-full'>
                    <img src={mutton} className="w-full img-pro"  alt='' />
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
                    <h1 className='text-4xl font-bold text-white font-serif'>Find The Delicious Food & <br /> Feel The Taste </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                    <p className='text-xl text-white font-serif'>Making The Delicious Premium Food Since 1981</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <div className='carousel-img w-full'>
                    <img src={boneless} className="w-full img-pro" alt='' />
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
                    <h1 className='text-4xl font-bold text-white font-serif'>Find The Delicious Food & <br /> Feel The Taste </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                    <p className='text-xl text-white font-serif'>Making The Delicious Premium Food Since 1981</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <div className='carousel-img w-full'>
                    <img src={chicken} className="w-full img-pro" alt='' />
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
                    <h1 className='text-4xl font-bold text-white font-serif'>Find The Delicious Food & <br /> Feel The Taste </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                    <p className='text-xl text-white font-serif'>Making The Delicious Premium Food Since 1981</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <div className='carousel-img w-full'>
                    <img src={hyderabadi} className="w-full img-pro" alt='' />
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
                    <h1 className='text-4xl font-bold text-white font-serif'>Find The Delicious Food & <br /> Feel The Taste </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                    <p className='text-xl text-white font-serif'>Making The Delicious Premium Food Since 1981</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default Banner;
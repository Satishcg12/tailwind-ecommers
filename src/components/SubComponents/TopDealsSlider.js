import React from 'react'
import Slider from 'react-slick'

const TopDealsSlider = () => {
    var settings={
        dots:true,
        infinity:true,
        autoplay:true,
        autoplaySpeed:1000,
        speed: 500,

        slidesToShow:3,
        slidesToScroll:1
    }

    return (
        <>
        <Slider {...settings} className=' w-11/12 h-60 '>
        <div className=' bg-black h-60 overflow-hidden'>
        hello
        </div>
        <div className=' bg-blue-200 h-60 '>
        satusg
        </div><div className='w-56 bg-red-700 '>
       
        </div><div className='w-56 bg-yellow-600 '>
satish
        </div>

        </Slider>   
        </>
    )
}

export default TopDealsSlider

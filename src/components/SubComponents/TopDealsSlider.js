import React from "react";
import Slider from "react-slick";

const TopDealsSlider = () => {
  var settings = {
    dots: true,
    infinity: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings} className=" w-full h-60 shadow-lg">
        <div className=" bg-black h-60 w-auto overflow-hidden text-white">1</div>
        <div className=" bg-black h-60 w-auto overflow-hidden text-white">2</div>
        <div className=" bg-black h-60 w-auto overflow-hidden text-white">3</div>
        <div className=" bg-black h-60 w-auto overflow-hidden text-white">4</div>
        <div className=" bg-black h-60 w-auto overflow-hidden text-white">5</div>
        <div className=" bg-black h-60 w-auto overflow-hidden text-white">6</div>
      </Slider>
    </>
  );
};

export default TopDealsSlider;

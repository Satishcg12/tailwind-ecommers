import React from "react";
import Slider from "react-slick";

const TopDealsSlider = () => {
  var settings = {
    dots: true,
    infinity: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings} className=" w-full h-60 shadow-lg">
        <div className=" bg-black h-60 w-auto overflow-hidden"></div>
        <div className=" bg-blue-200 h-60 ">satusg</div>
        <div className="w-56 bg-red-700 "></div>
        <div className="w-56 bg-yellow-600 ">satish</div>
      </Slider>
    </>
  );
};

export default TopDealsSlider;

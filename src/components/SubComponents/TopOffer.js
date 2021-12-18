import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const TopOffer = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="h-56 grid grid-cols-5">
        <div className="shadow h-full flex flex-col items-center rounded-lg">
          <div className="w-full flex bg-blue-500 h-32 items-center justify-center shadow-lg">
            <i className="fas fa-funnel-dollar text-6xl text-gray-200 animate-pulse"></i>
          </div>
          <div className="font-bold">Top deals</div>
          <div className="pt-2">
            <button className="shadow-lg bg-blue-600 hover:bg-blue-800 text-white  px-3 py-1 rounded-md">
              view all
            </button>
          </div>
        </div>
        <div className="col-span-4">
          <Slider {...settings} className=" h-56 gap-3">
            {/* item start */}
          <div className="h-56 rounded-lg overflow-hidden shadow">
              <img src="" alt="pimage" className="w-auto h-40 border" />
              <div className="grid grid-cols-2 pl-5 items-center">
                <div>
                  <span className="font-bold">Item Name</span>
                  <br />
                  <span className="font-light text-gray-400">Price</span>
                </div>
                <div>
                  <Link to="/addcart/:id">
                    <span className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md mr-1">
                      <i class="fas fa-plus-circle"></i>
                    </span>
                  </Link>

                  <Link to="/productdetail/23">
                    <span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md">
                      <i class="fas fa-info-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
          {/* item end */}
          {/* dummi item start */}
          <div className="h-56 rounded-lg overflow-hidden shadow">
              <img src="" alt="pimage" className="w-auto h-40 border" />
              <div className="grid grid-cols-2 pl-5 items-center">
                <div>
                  <span className="font-bold">Item Name</span>
                  <br />
                  <span className="font-light text-gray-400">Price</span>
                </div>
                <div>
                  <Link to="/addcart/:id">
                    <span className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md mr-1">
                      <i class="fas fa-plus-circle"></i>
                    </span>
                  </Link>

                  <Link to="/productdetail/23">
                    <span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md">
                      <i class="fas fa-info-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
          <div className="h-56 rounded-lg overflow-hidden shadow">
              <img src="" alt="pimage" className="w-auto h-40 border" />
              <div className="grid grid-cols-2 pl-5 items-center">
                <div>
                  <span className="font-bold">Item Name</span>
                  <br />
                  <span className="font-light text-gray-400">Price</span>
                </div>
                <div>
                  <Link to="/addcart/:id">
                    <span className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md mr-1">
                      <i class="fas fa-plus-circle"></i>
                    </span>
                  </Link>

                  <Link to="/productdetail/23">
                    <span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md">
                      <i class="fas fa-info-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
          <div className="h-56 rounded-lg overflow-hidden shadow">
              <img src="" alt="pimage" className="w-auto h-40 border" />
              <div className="grid grid-cols-2 pl-5 items-center">
                <div>
                  <span className="font-bold">Item Name</span>
                  <br />
                  <span className="font-light text-gray-400">Price</span>
                </div>
                <div>
                  <Link to="/addcart/:id">
                    <span className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md mr-1">
                      <i class="fas fa-plus-circle"></i>
                    </span>
                  </Link>

                  <Link to="/productdetail/23">
                    <span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md">
                      <i class="fas fa-info-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
          <div className="h-56 rounded-lg overflow-hidden shadow">
              <img src="" alt="pimage" className="w-auto h-40 border" />
              <div className="grid grid-cols-2 pl-5 items-center">
                <div>
                  <span className="font-bold">Item Name</span>
                  <br />
                  <span className="font-light text-gray-400">Price</span>
                </div>
                <div>
                  <Link to="/addcart/:id">
                    <span className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md mr-1">
                      <i class="fas fa-plus-circle"></i>
                    </span>
                  </Link>

                  <Link to="/productdetail/23">
                    <span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md">
                      <i class="fas fa-info-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
          <div className="h-56 rounded-lg overflow-hidden shadow">
              <img src="" alt="pimage" className="w-auto h-40 border" />
              <div className="grid grid-cols-2 pl-5 items-center">
                <div>
                  <span className="font-bold">Item Name</span>
                  <br />
                  <span className="font-light text-gray-400">Price</span>
                </div>
                <div>
                  <Link to="/addcart/:id">
                    <span className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md mr-1">
                      <i class="fas fa-plus-circle"></i>
                    </span>
                  </Link>

                  <Link to="/productdetail/23">
                    <span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md">
                      <i class="fas fa-info-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
          <div className="h-56 rounded-lg overflow-hidden shadow">
              <img src="" alt="pimage" className="w-auto h-40 border" />
              <div className="grid grid-cols-2 pl-5 items-center">
                <div>
                  <span className="font-bold">Item Name</span>
                  <br />
                  <span className="font-light text-gray-400">Price</span>
                </div>
                <div>
                  <Link to="/addcart/:id">
                    <span className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md mr-1">
                      <i class="fas fa-plus-circle"></i>
                    </span>
                  </Link>

                  <Link to="/productdetail/23">
                    <span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md">
                      <i class="fas fa-info-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
          <div className="h-56 rounded-lg overflow-hidden shadow">
              <img src="" alt="pimage" className="w-auto h-40 border" />
              <div className="grid grid-cols-2 pl-5 items-center">
                <div>
                  <span className="font-bold">Item Name</span>
                  <br />
                  <span className="font-light text-gray-400">Price</span>
                </div>
                <div>
                  <Link to="/addcart/:id">
                    <span className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md mr-1">
                      <i class="fas fa-plus-circle"></i>
                    </span>
                  </Link>

                  <Link to="/productdetail/23">
                    <span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md">
                      <i class="fas fa-info-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
          <div className="h-56 rounded-lg overflow-hidden shadow">
              <img src="" alt="pimage" className="w-auto h-40 border" />
              <div className="grid grid-cols-2 pl-5 items-center">
                <div>
                  <span className="font-bold">Item Name</span>
                  <br />
                  <span className="font-light text-gray-400">Price</span>
                </div>
                <div>
                  <Link to="/addcart/:id">
                    <span className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md mr-1">
                      <i class="fas fa-plus-circle"></i>
                    </span>
                  </Link>

                  <Link to="/productdetail/23">
                    <span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md">
                      <i class="fas fa-info-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
          <div className="h-56 rounded-lg overflow-hidden shadow">
              <img src="" alt="pimage" className="w-auto h-40 border" />
              <div className="grid grid-cols-2 pl-5 items-center">
                <div>
                  <span className="font-bold">Item Name</span>
                  <br />
                  <span className="font-light text-gray-400">Price</span>
                </div>
                <div>
                  <Link to="/addcart/:id">
                    <span className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md mr-1">
                      <i class="fas fa-plus-circle"></i>
                    </span>
                  </Link>

                  <Link to="/productdetail/23">
                    <span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md">
                      <i class="fas fa-info-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
          <div className="h-56 rounded-lg overflow-hidden shadow">
              <img src="" alt="pimage" className="w-auto h-40 border" />
              <div className="grid grid-cols-2 pl-5 items-center">
                <div>
                  <span className="font-bold">Item Name</span>
                  <br />
                  <span className="font-light text-gray-400">Price</span>
                </div>
                <div>
                  <Link to="/addcart/:id">
                    <span className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md mr-1">
                      <i class="fas fa-plus-circle"></i>
                    </span>
                  </Link>

                  <Link to="/productdetail/23">
                    <span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md">
                      <i class="fas fa-info-circle"></i>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
          {/* dummi items end */}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TopOffer;

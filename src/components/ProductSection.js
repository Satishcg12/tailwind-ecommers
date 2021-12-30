import React from "react";

const ProductSection = () => {
  return (
    <>
      <h1 className="mt-10 mb-2 text-center capitalize text-4xl">Products</h1>
      <hr className="w-1/2 mx-auto" />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-3 justify-items-center my-10">
          {/* 1st card item */}
        <div className=" h-auto rounded-lg shadow-2xl  w-60 overflow-clip bg-white">
          <div className="border-b pt-1">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000"
              alt=""
              className="h-60 mx-auto"
            />
          </div>
          <div className="bg-blue-500 text-white w-full p-2">
            <div className=" text-xl font-bold capitalize whitespace-nowrap ">title</div>
            <span className="text-white text-sm">price</span>
            <div className="grid grid-flow-col whitespace-nowrap text-xs mt-1 text-blue-500 ">
              <span className="mx-1 px-2 bg-white  rounded-lg shadow-lg">
                Electronic
              </span>
              <span className="mx-1 px-2 bg-white  rounded-lg shadow-lg">
                Smart-Phone
              </span>
              <span className="mx-1 px-2 bg-white  rounded-lg shadow-lg">
                Electronic
              </span>
              <span className="mx-1 px-2 bg-white  rounded-lg shadow-lg">
                Electronic
              </span>
            </div>
            <div className="text-right mt-2">
              <div className="">
              <span title="Add to cart" className="bg-white text-blue-500 px-2 py-1 rounded-l-lg shadow-lg hover:bg-blue-400 hover:text-white" >
                <i className="fas fa-cart-plus"></i>
              </span>
              <span title="View Details" className="bg-white text-blue-500 px-2 py-1 rounded-r-lg shadow-lg hover:bg-blue-400 hover:text-white" >
                <i className="fas fa-info-circle"></i>
              </span>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;

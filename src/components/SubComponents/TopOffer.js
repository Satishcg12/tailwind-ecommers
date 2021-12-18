import React from "react";

const TopOffer = () => {
  return (
    <>
      <div className="h-56">
        <div className="shadow w-48 h-full flex flex-col items-center ">
          <div className="w-full flex bg-blue-500 h-32 items-center justify-center shadow-lg">
            <i className="fas fa-funnel-dollar text-6xl text-gray-200"></i>
          </div>
          <div className="pt-5">
            <button className="shadow-lg bg-blue-600 text-white px-3 py-1 rounded-md">
              view all
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopOffer;

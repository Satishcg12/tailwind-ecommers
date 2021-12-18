import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <div className="flex justify-evenly py-3 shadow-lg bg-blue-600">
      <div className="flex">
        <div className="w-32 ">
          <NavLink to="/">
            <span className="italic font-bold text-xl text-white">
              FlipKart
            </span>
          </NavLink>
          <p className="text-xs -translate-x-0 lg:-translate-x-10 whitespace-nowrap overflow-x-hidden ">
            <span className="font-bold text-[#FFD700]">Events:</span>{" "}
            {<marquee scrollAmount='3' className="text-white ">envent namedfasdfasdfadf</marquee>}
          </p>
        </div>
        <form action="" className="px-5  h-10">
          <input
            type="text"
            className="border-none outline-none w-[40vw] px-3 py-1 rounded-l"
            />
          <button
            type="submit"
            className="bg-white text-blue-600 py-1 px-2 rounded-r"
            >
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <nav className="navlist hidden  items-center content-center duration-500  md:flex ">
        <div>
          <NavLink to="/" className="navlink text-2xl px-1 mr-5">
            <i className="fas fa-house-damage"></i>
          </NavLink>
        </div>
        <div>
          <NavLink to="/cart" className="navlink text-2xl px-1 mr-5">
            <i className="fas fa-cart-plus ">
              <span className="absolute translate-x-[-50%] translate-y-[-50%] bg-red-500 text-white px-1 rounded-full  text-xs">
                1
              </span>
            </i>
          </NavLink>
        </div>
        <div>
            <NavLink to='/notification' className="navlink text-2xl px-1 mr-5">
            <i class="fas fa-inbox after:absolute">
            <span className="absolute translate-x-[-50%] translate-y-[-50%] bg-red-500 text-white px-1 rounded-full  text-xs" >
                1
              </span>
            </i>
            </NavLink>
        </div>
        <div>
          <NavLink to="/settings" className="navlink text-2xl px-1 mr-5">
            <i className="fas fa-sliders-h"></i>
          </NavLink>
        </div>
      </nav>
      <nav className="navlist">
        <NavLink to="/login" className="text-3xl px-1 mr-5">
          <i className="fas fa-user-secret "></i>
        </NavLink>
      </nav>
    </div>
    <nav className="">
    <nav className="navlist flex bg-blue-700 items-center justify-end duration-500  md:hidden p-2 ">
        <div>
          <NavLink to="/" className="navlink text-2xl px-1 mr-5">
            <i className="fas fa-house-damage"></i>
          </NavLink>
        </div>
        <div>
          <NavLink to="/cart" className="navlink text-2xl px-1 mr-5">
            <i className="fas fa-cart-plus ">
              <span className="absolute translate-x-[-50%] translate-y-[-50%]   bg-red-500 text-white px-1 rounded-full  text-xs">
                1
              </span>
            </i>
          </NavLink>
        </div>
        <div>
            <NavLink to='/notification' className="navlink text-2xl px-1 mr-5">
            <i class="fas fa-inbox after:absolute">
            <span className="absolute translate-x-[-50%] translate-y-[-50%] bg-red-500 text-white px-1 rounded-full  text-xs" >
                1
              </span>
            </i>
            </NavLink>
        </div>
        <div>
          <NavLink to="/settings" className="navlink text-2xl px-1 mr-5">
            <i className="fas fa-sliders-h"></i>
          </NavLink>
        </div>
      </nav>
    </nav>
    </>

  );
};

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";
import SearchPopUp from "./SearchPopUp";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-around py-3 shadow-lg bg-blue-600">
        <div className="flex">
          <div className="w-32 ">
            <NavLink to="/">
              <span className="italic font-bold text-xl text-white">
                FlipKart
              </span>
            </NavLink>
            <p className="text-xs -translate-x-0 lg:-translate-x-10 whitespace-nowrap overflow-x-hidden ">
              <span className="font-bold text-[#FFD700]">
                Events:
                <span className="font-normal text-white">todays event</span>
              </span>
            </p>
          </div>
        </div>
        <div></div>
        <div></div>

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
            <NavLink to="/notification" className="navlink text-2xl px-1 mr-5">
              <i className="fas fa-inbox after:absolute">
                <span className="absolute translate-x-[-50%] translate-y-[-50%] bg-red-500 text-white px-1 rounded-full  text-xs">
                  1
                </span>
              </i>
            </NavLink>
          </div>
          <div>
            <NavLink to="/help" className="navlink text-2xl px-1 mr-5">
              <i className="far fa-question-circle"></i>
            </NavLink>
          </div>
          <div>
            <NavLink to="/settings" className="navlink text-2xl px-1 mr-5">
              <i className="fas fa-sliders-h"></i>
            </NavLink>
          </div>
        </nav>
        <nav className="navlist flex items-center">
          <div className="mr-5">
            <SearchPopUp />
          </div>
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
            <NavLink to="/notification" className="navlink text-2xl px-1 mr-5">
              <i className="fas fa-inbox after:absolute">
                <span className="absolute translate-x-[-50%] translate-y-[-50%] bg-red-500 text-white px-1 rounded-full  text-xs">
                  1
                </span>
              </i>
            </NavLink>
          </div>
          <div>
            <NavLink to="/help" className="navlink text-2xl px-1 mr-5">
              <i className="far fa-question-circle"></i>
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

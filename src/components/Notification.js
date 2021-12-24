import React from "react";
import { Link } from "react-router-dom";

const Notification = (props) => {
  return (
    <div className=" grid grid-flow-col border px-2 py-1 rounded-full my-2 shadow-2xl bg-white w-11/12 group">
      <h1 className="px-3 whitespace-nowrap">{props.title}</h1>
      <span className=" px-3  w-11/12  whitespace-nowrap overflow-hidden text-ellipsis ">
        {props.msg}
      </span>
      <span className="px-5 justify-self-end group-hover:invisible">
        {props.time}
      </span>
      <span className=" justify-self-end absolute hidden group-hover:flex  duration-75 translate-y-2 group-hover:translate-y-0 ease-in">
        <i className="far fa-trash-alt hover:text-red-500 hover:border-red-500  rounded-full border mr-2 p-1"></i>
        <Link to="/product/1212">
          <i className="fas fa-info  hover:text-blue-500 hover:border-blue-500  rounded-full border mr-2 px-2 py-1"></i>
        </Link>
      </span>
    </div>
  );
};

export default Notification;

import React from "react";
import PropTypes from 'prop-types'


const Notification = (props) => {
  const {title, category, time, msg } = props
  return (
  <>
    <div className="group border-b relative w-11/12">
      
      <h2>

      <span className="text-md font-semibold pr-1 text-blue-500">{title} </span>
      <span className="text-xs font-thin pr-1 text-gray-500">{category} </span>
      <span className="text-xs font-mono pr-1 text-gray-500 ">{time}  </span>
      </h2>
      <p className="text-sm text-gray-500  whitespace-nowrap overflow-clip text-ellipsis w-11/12 md:max-w-md max-w-xs">
          {msg} 
      </p>
      <div className="absolute right-3 -translate-y-[125%]">
        <div className="flex  bg-blue-500 text-white rounded-lg text-center">
          <button className="px-2 py-1 hover:bg-blue-700 rounded-lg hover:text-red-500 "><i className="fas fa-trash"></i></button>
          <button className="px-2 py-1 hover:bg-blue-700 rounded-lg hover:text-green-400 "  onClickCapture={()=>props.showNotificaionDetials(title,category, time, msg)}><i className="fas fa-info-circle"></i></button>
        </div>
      </div>
    </div>
  </>
  );
};

export default Notification;

Notification.propTypes={
  title : PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired
}

Notification.defaultProps = {
  title:'Error',
  msg:`sorry can't load notification try again`,
  time:'error',
  category:'error'
}
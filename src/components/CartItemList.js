import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartItemList = (props) => {
    const [quentity, setQuentity] = useState(props.quentity)
  return (
    <>
      
              <td className="">item 1</td>
              <td className="">
                
                <img src="" alt="imgs" className="w-auto h-24 border" />
              </td>
              <td className="">$100</td>
              <td className="">
                <span className="invisible"> s</span>
                {quentity<10&&
                  <span className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md" onClick={()=>{setQuentity(quentity+1)}}>
                    <i class="fas fa-plus-circle"></i>
                  </span>                
                }
              </td>
              <td>{quentity}</td>
              <td className="">

                  {quentity>0&&
                <span className="bg-red-500 hover:bg-red-800 text-white px-2 py-1 rounded-full shadow-md" onClick={()=>{setQuentity(quentity-1)}}>
                  <i class="far fa-times-circle"></i>
                </span>
                }
              </td>
              <td className="">
                <Link to="/productdetail/:id">
                  <span className="bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded-full shadow-md">
                    <i class="fas fa-trash"></i>
                  </span>
                </Link>
              </td>
              <td className="">
                <Link to="/productdetail/:id">
                  <span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md">
                    <i class="fas fa-info-circle"></i>
                  </span>
                </Link>
              </td>
        
    </>
  );
};

export default CartItemList;

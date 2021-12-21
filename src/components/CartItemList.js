import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartItemList = (props) => {
  const [quentity, setQuentity] = useState(props.quentity);
  return (
    <>
      <tbody className=" border">
        <tr className="text-center">
          <td className=" border">item 1</td>
          <td className="border">
            <img src="" alt="imgs" className="w-auto h-24 border" />
          </td>
          <td className="border">$100</td>

          <td className="select-none border ">
          {quentity<10 &&

            <span
              className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md"
              onClick={() => {
                setQuentity(quentity + 1);
              }}
            >
              <i class="fas fa-plus-circle"></i>
            </span>
  }
            <input
              type="number"
              name="quentity"
              id="quentity"
              disabled
              value={quentity}
              className="w-10 text-center select-none"
            />
            {quentity>1 &&
              <span
              className="bg-red-500 hover:bg-red-800 text-white px-2 py-1 rounded-full shadow-md"
              onClick={() => setQuentity(quentity - 1)}
              >
              <i class="far fa-times-circle"></i>
            </span>
            }
          </td>

          <td className="border">
            <Link to="/productdetail/:id">
              <span className="bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded-full shadow-md mr-3">
                <i class="fas fa-trash"></i>
              </span>
            </Link>
            <Link to="/productdetail/:id">
              <span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md">
                <i class="fas fa-info-circle"></i>
              </span>
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CartItemList;

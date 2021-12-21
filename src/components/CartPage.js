import React from "react";
import CartItemList from "./CartItemList";

const CartPage = () => {
  return (
    <div>
      <center>
        <h1 className="text-gray-600 text-4xl py-7">My Cart</h1>
      </center>
      <div className="grid md:grid-cols-3">
        <div className="col-span-2">
          <div className="m-5  min-h-10">
            <div className=" flex justify-center">
              <table className="table-auto border-separate border   w-11/12  ">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300"> Name</th>
                    <th className="border border-gray-300"> Image</th>
                    <th className="border border-gray-300"> Price</th>
                    <th className="border border-gray-300" >
                      Quentity
                    </th>
                    <th className="border border-gray-300">
                      Action
                    </th>
                  </tr>
                </thead>

                    <CartItemList quentity={1} itemName="item name" imageUrl="url"/>
                <tfoot className="text-center">
                  <tr>
                    <td colSpan={5}  className="border bg-red-600 rounded text-white" >
                      <button className="w-full focus:border-4 border-red-400 hover:bg-red-700"> Delete all</button> 
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="m-5 border">
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

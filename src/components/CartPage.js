import React from "react";
import CartItemList from "./CartItemList";

const CartPage = () => {
  return (
    <>
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
          <div className="m-5 border rounded-md shadow-lg flex flex-col  p-2">
            <h1 className="text-2xl m-2 underline">Details</h1>
            <h3 className="font-bold">Number of item:</h3>
            <span className="text-gray-400 before:content-['~']">  21</span>    
            <h3 className="font-bold">Total Price</h3>
            <span className="text-gray-400 before:content-['~']"> Rs 101001</span>
            
            <button className="border rounded my-3 bg-green-400 hover:bg-green-600  text-white shadow">Order</button>

          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">

      <h1 className="text-3xl text-center border w-11/12 shadow-lg p-3">You have not added anything to cart</h1>
      </div>
    </>
  );
};

export default CartPage;

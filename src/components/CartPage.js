import React from "react";
import CartItemList from "./CartItemList";

const CartPage = () => {
  return (
    <div>
      <center>
        <h1>My Cart</h1>
      </center>
      <div className="grid md:grid-cols-3">
        <div className="col-span-2">
          <div className="m-5 border min-h-10">
            <div className=" flex justify-center">
              <table className="table-auto border-separate border   w-11/12  ">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300"> Name</th>
                    <th className="border border-gray-300"> Image</th>
                    <th className="border border-gray-300"> Price</th>
                    <th className="border border-gray-300" colSpan={3}>
                      Quentity
                    </th>
                    <th className="border border-gray-300" colSpan={2}>
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className=" border">
                  <tr className="text-center">
                    <CartItemList quentity={1} />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="m-5 border">details</div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

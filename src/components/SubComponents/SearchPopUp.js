import React from "react";
import { Link } from "react-router-dom";

const SearchPopUp = () => {
    const togglebtn =()=>{
        const field =document.querySelector('#searchField')
        const field1 =document.querySelector('#searchField1')
        field.classList.toggle('scale-0')
        field1.classList.toggle('scale-0')
        field.classList.toggle('scale-1')
        field1.classList.toggle('scale-1')
    }

  return (
    <>
      <button
        className="hover:bg-white hover:text-blue-600 py-1 px-2 rounded"
        id="searchBtn" onClick={togglebtn}
      >
        <i className="fas fa-search text-2xl"></i>
      </button>

      <div className="fixed bg-fixed backdrop-blur-md inset-0 bg-[#0000007a] flex  flex-col items-center justify-center z-20 scale-0 duration-300 h-full" id='searchField' >
        
        <div className="bg-white w-11/12 sm:w-10/12 md:w-9/12 h-5/6 rounded-lg text-gray-800  scale-0 duration-500"   id='searchField1'>
          <div className="flex justify-between m-3 px-2 items-center">
            <div className="w-10/12 m-1 shadow-lg border rounded-full overflow-hidden">
              <input
                type="search"
                name="search"
                id="search"
                className="w-10/12 md:w-11/12 px-10  outline-none"
              />
              <button className="bg-blue-500 text-white w-2/12 md:w-1/12 h-full py-2">
              <i className="fas fa-search text-2xl"></i>
              </button>
            </div>
            <button className="hover:bg-red-500 px-3 py-1 hover:text-white text-red-500 rounded-full" onClick={togglebtn}>
              <i class="fas fa-times "></i>
            </button>
          </div>
            <div className=" flex justify-center">
                <table className="table-auto border-separate  w-11/12 ">
                    <thead className="bg-gray-200">
                        <tr>

                        <th className="border border-gray-300"> item name</th>
                        <th className="border border-gray-300"> item image</th>
                        <th className="border border-gray-300"> item price</th>
                        <th className="border border-gray-300" colSpan={2}> item addto</th>
                        </tr>
                    </thead>
                    <tbody className=" border">
                    <tr className="text-center">
                            <td className="">item 1</td>
                            <td className=""> <img src="" alt="imgs" className="w-auto h-24 border"/></td>
                            <td className="">$100</td>
                            <td className=""><Link to='/addcart/:id'><span className="bg-green-500 hover:bg-green-800 text-white px-2 py-1 rounded-full shadow-md"><i class="fas fa-plus-circle"></i></span></Link></td>
                            <td className=""><Link to='/productdetail/:id'><span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md"><i class="fas fa-info-circle"></i></span></Link></td>
                        </tr>
                        <tr className="text-center">
                            <td className="">item 1</td>
                            <td className=""> <img src="" alt="imgs" className="w-auto h-24 border"/></td>
                            <td className="">$100</td>
                            <td className="" ><span className="bg-red-500 hover:bg-red-800 text-white px-2 py-1 rounded-full shadow-md"><i class="far fa-times-circle"></i></span></td>
                            <td className=""><Link to='/productdetail/:id'><span className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-1 rounded-full shadow-md"><i class="fas fa-info-circle"></i></span></Link></td>

                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
      </div>
    </>
  );
};

export default SearchPopUp;

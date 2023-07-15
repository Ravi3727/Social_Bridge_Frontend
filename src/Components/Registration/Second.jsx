import React from "react";
import {Link} from "react-router-dom";

function Second() {
  return (
    <>
    <div style={{backgroundColor:'#fdd8d2'}} className=" w-full h-full rounded-xl border-1 border-solid">

   
    <Link to="/Explore/registration/first"> <div className="p-2"> 
            <button className="border-2 border-purple-900 border-solid p-1 rounded-xl text-white bg-purple-900 font-bold w-20">Prev</button>

          </div></Link>
      <h2 className="text-3xl w-[90%] text-center font-extrabold text-purple-900 mt-6 ml-5 ">
        Social Media Handles!
      </h2>

      <div className="flex flex-col gap-6 w-[80%] border-1 bg-purple-900 items-center mx-auto rounded-xl mt-6 p-2 shadow-xl">
        <div className="flex max-w-[80%]  flex-col mb-3 ">
          <label
            htmlFor="Instagram"
            className="ml-52 text-red-500 text-lg font-semibold"
          >
            *
          </label>
          <input
            type="text"
            placeholder="Instagram"
            className="-mt-2 border-2 border-purple-900 rounded-xl bg-red-100 h-10 p-2 text-purple-900 font-semibold"
          />
        </div>
        
        <div className="flex max-w-[80%]  flex-col">
        
          <input
            type="text"
            placeholder="LinkedIn"
            className="-mt-2 border-2 border-purple-900 rounded-xl bg-red-100 h-10 p-2 text-purple-900 font-semibold"
          />
            <label
            htmlFor="LinkedIn"
            className="ml-36 mb-1 text-white text-sm  font-semibold"
          >
            (optional)
          </label>
        </div>

        {/* <div className="flex max-w-[80%]  flex-col">
        <input
          type="text"
          placeholder="Facebook"
          className="-mt-2 border-2 border-purple-900 rounded-xl bg-red-100 h-10 p-2 text-purple-900 font-semibold"
        />
          <label
          htmlFor="Facebook"
          className="ml-36 mb-1 text-white text-sm  font-semibold"
        >
          (optional)
        </label>
      </div> */}
        
      <div className="flex max-w-[80%]  flex-col">
        
        <input
          type="tel"
          placeholder="WhatsApp Number"
          className="-mt-2 border-2 border-purple-900 rounded-xl bg-red-100 h-10 p-2 text-purple-900 font-semibold"
        />
          <label
          htmlFor="WhatsApp Number"
          className="ml-36 mb-1 text-white text-sm  font-semibold"
        >
          (optional)
        </label>
      </div>
        
      </div>
      <Link to="/registration/Intrest">
          <button>
            <div className="mt-8 font-extrabold text-xl text-red-100  border-2 border-red-200 p-1 rounded-xl bg-purple-900 w-20 ml-[31vw]">
            Next
            </div>
          </button>
        </Link>
      
      </div>
    </>
  );
}

export default Second;

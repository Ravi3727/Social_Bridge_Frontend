import React from "react";
import {Link} from "react-router-dom";


function Third() {
  return (
    <>
      <div
        style={{ backgroundColor: "#fdd8d2" }}
        className="w-full h-full rounded-xl "
      >
        <Link to="/registration/Intrest"> <div className="p-2"> 
            <button className="border-2 border-purple-900 border-solid p-1 rounded-xl text-white bg-purple-900 w-20 font-bold">Prev</button>

          </div></Link>
        
        <div className="w-full  max-h-[90%] flex flex-col mt-2 overflow-y-scroll">
        <h2 className="text-2xl text-start ml-2 font-extrabold text-purple-900 mb-4">
          Let us get to you Know better...
        </h2>
          {/* First question */}
          <div className="flex flex-col p-2 border-1">
            <label
              htmlFor="question1"
              className="text-lg font-extrabold text-purple-800"
            >
              Describe Yourself brifly.
            </label>
            <textarea
              name="question1"
              id="q1"
              cols="8"
              rows="5"
              placeholder="Your answer"
              className="border-2 border-purple-900 bg-purple-100 rounded-2xl p-2 text-purple-800 text-md font-semibold"
            ></textarea>
          </div>
          {/* Second question */}
          <div className="flex flex-col p-2">
            <label
              htmlFor="question1"
              className="text-lg font-extrabold text-purple-800"
            >
              What do you like to do in your free time?
            </label>
            <textarea
              name="question1"
              id="q1"
              cols="8"
              rows="5"
              placeholder="Your answer"
              className="border-2 border-purple-900 bg-purple-100 rounded-2xl p-2 text-purple-800 text-md font-semibold"
            ></textarea>
          </div>

          {/* Third question */}
          <div className="flex flex-col p-2">
            <label
              htmlFor="question1"
              className="text-lg font-extrabold text-purple-800"
            >
              Name Your always Top
              <span className="text-green-600 text-xl" > 5 </span>favourite songs?
            </label>
            <textarea
              name="question1"
              id="q1"
              cols="8"
              rows="5"
              placeholder="Your answer"
              className="border-2 border-purple-900 bg-purple-100 rounded-2xl p-2 text-purple-800 text-md font-semibold"
            ></textarea>
          </div>

          {/* Fourth question */}
          <div className="flex flex-col p-2">
            <label
              htmlFor="question1"
              className="text-lg font-extrabold text-purple-800"
            >
              Name <span className="text-green-600 text-xl">5 </span> areas in
              which you want to improve?
            </label>
            <textarea
              name="question1"
              id="q1"
              cols="8"
              rows="5"
              placeholder="Your answer"
              className="border-2 border-purple-900 bg-purple-100 rounded-2xl p-2 text-purple-800 text-md font-semibold"
            ></textarea>
          </div>
          <Link to="/registration/third2">
          <button>
            <div className="font-bold text-xl text-red-100 border-2 border-purple-900 bg-purple-900 p-2 rounded-xl w-[40vw] ml-5">
            Next
            </div>
          </button>
        </Link>

        </div>
      </div>
    </>
  );
}

export default Third;

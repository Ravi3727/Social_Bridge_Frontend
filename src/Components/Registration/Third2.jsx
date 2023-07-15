import React from "react";
import {Link} from "react-router-dom";


function Third2() {
  return (
    <>
      <div
        style={{ backgroundColor: "#fdd8d2" }}
        className="w-full h-full rounded-xl "
      >
        <Link to="/registration/third"> <div className="p-2"> 
            <button className="border-2 border-purple-900 border-solid p-1 rounded-xl text-white bg-purple-900 w-20 font-bold">Prev</button>

          </div></Link>
        
        <div className="w-full h-[90%] flex flex-col mt-2 overflow-y-scroll">
        <h2 className="text-3xl text-center font-extrabold text-purple-800 mb-4">
          Last few questions...
        </h2>

          {/* Fifth question */}
          <div className="flex flex-col p-2">
            <label
              htmlFor="question5"
              className="text-lg font-extrabold text-purple-800"
            >
              Write about an important event in your life?
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

          {/* Sixth question */}
          <div className="flex flex-col p-2">
            <label
              htmlFor="question6"
              className="text-lg font-extrabold text-purple-800"
            >
              If you could have superpowers, what would it be and why?
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

          {/* Seventh question */}
          <div className="flex flex-col p-2">
            <label
              htmlFor="question1"
              className="text-lg font-extrabold text-purple-800"
            >
              If you were not in DTU then what would you be doing?
            </label>
            <textarea
              name="question7"
              id="q1"
              cols="8"
              rows="5"
              placeholder="Your answer"
              className="border-2 border-purple-900 bg-purple-100 rounded-2xl p-2 text-purple-800 text-md font-semibold"
            ></textarea>
          </div>

          {/* Eighth question */}
          <div className="flex flex-col p-2">
            <label
              htmlFor="question8"
              className="text-lg font-extrabold text-purple-800"
            >
              If you could with be anyone in the world for 10 minutes,who
              would it be and why?
            </label>
            <textarea
              name="question8"
              id="q1"
              cols="8"
              rows="5"
              placeholder="Your answer"
              className="border-2 border-purple-900 bg-purple-100 rounded-2xl p-2 text-purple-800 text-md font-semibold"
            ></textarea>
          </div>


          <Link to="/Explore">
          <button>
            <div className="font-bold text-xl text-red-100 border-2 border-purple-900 bg-purple-900 p-2 rounded-xl w-[40vw] ml-5">
            Submit For Verifivation
            </div>
          </button>
        </Link>
        </div>
       
      </div>
    </>
  );
}

export default Third2;

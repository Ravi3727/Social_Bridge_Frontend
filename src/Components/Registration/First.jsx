import React from "react";
import { Link } from 'react-router-dom';

import DateOfBirth from "./DateOfBirth";
import Footer from "../Footer";

function First() {
  return (
    <>
      <div className="w-full h-full rounded-t-xl border-2 border-solid  border-purple-900" style={{ backgroundColor: '#fdd8d2' }}>
      <Link to="/Explore"> <div className="p-2"> 
            <button className="border-2 border-purple-900 border-solid p-1 rounded-xl text-white bg-purple-900 w-20 font-bold">Prev.</button>

          </div></Link>

        <div className="flex flex-col justify-between items-center gap-4 ">
          <div>
            <h1 className="text-5xl font-extrabold text-purple-900">Hi!</h1>
            <h2 className="text-2xl font-extrabold text-purple-900">
              Create a new profile
            </h2>
          </div>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            className="border-2 border-solid border-purple-900 w-28 h-28 rounded-full"
          ></input>
          <label
            htmlFor="profileImage"
            className="text-purple-800 text-lg font-semibold"
          >

          </label>

          <div className="flex flex-col gap-10 border-2 w-full p-2 items-start border-purple-900 bg-purple-900 rounded-t-3xl rounded-b-xl h-[47vh]">

            <div className="flex flex-wrap gap-3 justify-between mt-4">

              {/* Course Name */}
              <select
                name="courses"
                id="courses"
                className=" border-purple-900 border-2 p-2 rounded-xl w-40 bg-purple-100"
              >
                <option
                  value="#"
                  className=" rounded-xl text-purple-900 font-semibold text-md"
                >
                  Course
                </option>

                <option
                  value="btech"
                  className="text-purple-900 font-semibold text-md"
                >
                  B.tech
                </option>
                <option
                  value="designing"
                  className="text-purple-900 font-semibold text-md"
                >
                  Designing
                </option>
                <option
                  value="mtech"
                  className="text-purple-900 font-semibold text-md"
                >
                  Mtech
                </option>
                <option
                  value="Phd"
                  className="text-purple-900 font-semibold text-md"
                >
                  Phd
                </option>
              </select>


              {/* Branch Name */}
              <select
                name="courses"
                id="courses"
                className=" border-purple-900 border-2 p-2 rounded-xl w-40 bg-purple-100"
              >
                <option
                  value="#"
                  className=" rounded-xl text-purple-900 font-semibold text-md"
                >
                  Branch
                </option>

                <option
                  value="CS"
                  className="text-purple-900 font-semibold text-md"
                >
                  CS
                </option>

                <option
                  value="IT"
                  className="text-purple-900 font-semibold text-md"
                >
                  IT
                </option>

                <option
                  value="Software Engg."
                  className="text-purple-900 font-semibold text-md"
                >
                  Software Engg.
                </option>

                <option
                  value="MCE"
                  className="text-purple-900 font-semibold text-md"
                >
                  MCE
                </option>
                <option
                  value="ECE"
                  className="text-purple-900 font-semibold text-md"
                >
                  ECE
                </option>

                <option
                  value="Electrical Engg."
                  className="text-purple-900 font-semibold text-md"
                >
                  Electrical Engg.
                </option>

                <option
                  value="Engineering Physics"
                  className="text-purple-900 font-semibold text-md"
                >
                  Engineering Physics
                </option>

                <option
                  value="Mechanical"
                  className="text-purple-900 font-semibold text-md"
                >
                  Mechanical Engg.
                </option>

                <option
                  value="civil"
                  className="text-purple-900 font-semibold text-md"
                >
                  Civil Engg.
                </option>
                <option
                  value="biotech"
                  className="text-purple-900 font-semibold text-md"
                >
                  Biotech
                </option>
                <option
                  value="environment"
                  className="text-purple-900 font-semibold text-md"
                >
                  Environment Engg.
                </option>
              </select>



              {/* Present Year */}
              <select
                name="gender"
                id="gender"
                className=" border-purple-900 border-2 p-2 rounded-xl w-40 bg-purple-100"
              >
                <option
                  value="#"
                  className=" rounded-xl text-purple-900 font-semibold text-md"
                >
                  Present Year
                </option>
                <option
                  value="First"
                  className="text-purple-900 font-semibold text-md"
                >
                  First
                </option>
                <option
                  value="Second"
                  className="text-purple-900 font-semibold text-md"
                >
                  Second
                </option>
                <option
                  value="Third"
                  className="text-purple-900 font-semibold text-md"
                >
                  Third
                </option>
                <option
                  value="Fourth"
                  className="text-purple-900 font-semibold text-md"
                >
                  Fourth
                </option>
              </select>


              {/* Gender */}
              <select
                name="gender"
                id="gender"
                className=" border-purple-900 border-2 p-2 rounded-xl w-40 bg-purple-100"
              >
                <option
                  value="#"
                  className=" rounded-xl text-purple-900 font-semibold text-md"
                >
                  Gender
                </option>
                <option
                  value="male"
                  className="text-purple-900 font-semibold text-md"
                >
                  Male
                </option>
                <option
                  value="female"
                  className="text-purple-900 font-semibold text-md"
                >
                  Female
                </option>
                <option
                  value="other"
                  className="text-purple-900 font-semibold text-md"
                >
                  Other
                </option>
              </select>
            </div>

            {/* Date Of Birth */}
            <div className="flex"><DateOfBirth />
              <Link to="/registration/second">
                <button>
                  <div className="ml-[4vw] mt-[1vh] font-extrabold text-xl text-purple-900 border-2 border-red-200 p-1 rounded-xl bg-red-200 -mt-20 w-20">
                    Next
                  </div>
                </button>
              </Link>

            </div>




            {/* <div className=" ml-8 mt-10">
            <h1 className="text-sm font-semibold text-white">
              Already have an account?<span> </span>
              <Link to="/signin">
              
              <span className="text-lg underline font-semibold text-red-300">
                SIGN IN
              </span></Link>
            </h1>
          </div> */}

            
          </div>
          <div className="-mt-[12vw]"> 
          <Footer />
          </div>
        </div>


      </div>
    </>
  );
}

export default First;

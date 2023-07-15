// import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Intension() {
  return (
    <>

      <div className="h-full w-full flex flex-col gap-8 bg-red-100">
        <div className="flex flex-col gap-2 h-34">
          <h1 className="p-2 text-4xl font-extrabold text-purple-900 ">
            Select Your Intension
          </h1>
          <h1 className="p-2 text-2xl font-extrabold text-purple-900">
            Choose any of the following to get a suitable match
          </h1>
        </div>

        <div className=" h-[70%] w-full justify-between flex flex-col bg-purple-900 rounded-t-2xl border-white" >

          <div className="mt-8 flex w-full flex-row gap-4 justify-evenly">

            <div className="flex flex-col gap-10">


              <Link to="/subdevision">
                <button>
                  <div className="border-2 border-purple-900 p-3  rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
                    Mentorship
                  </div>
                </button>
              </Link>

              <Link to="/subdevision">
                <button>
                  <div className="border-2 border-purple-900 p-3 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
                    Friendship
                  </div>
                </button>
              </Link>

              <Link to="/subdevision">
                <button>
                  <div className="border-2 border-purple-900 p-3 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
                    Similar Intrest
                  </div>
                </button>
              </Link></div>
            <div className="flex flex-col gap-10 ">

              <Link to="/subdevision">
                <button>
                  <div className="border-2 border-purple-900 p-3 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
                    Sports
                  </div>
                </button>
              </Link>

              <Link to="/subdevision">
                <button>
                  <div className="border-2 border-purple-900 p-3 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
                    Events/Fests
                  </div>
                </button>
              </Link>

              <Link to="/subdevision">
                <button>
                  <div className="border-2 border-purple-900 p-3 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
                    Studyhub
                  </div>
                </button>
              </Link></div>
          </div>


          <Footer />


        </div>

      </div>


    </>
  );
}

export default Intension;

// import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function SubDivision() {
  return (
    <>

      <div className="h-full w-full flex flex-col gap-12 bg-red-100">
        <div className="flex flex-col gap-2 h-34">
          <h1 className="p-2 mt-2 text-4xl font-extrabold text-purple-900 ">
            Mentorship
          </h1>
          <h1 className="p-2 text-2xl font-extrabold text-purple-900">
            Choose any of the following Feild In Progress.
          </h1>
        </div>

        <div className=" h-[70%] w-full justify-between flex flex-col bg-purple-900 rounded-t-2xl border-white border-2" >

          <div className="mt-8 flex flex-row gap-4 justify-evenly">

            <div className="flex flex-col gap-10">


              <Link to="/posts">
                <button>
                  <div className="border-2 border-purple-900 p-3  rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
                    Cricket
                  </div>
                </button>
              </Link>

              <Link to="/posts">
                <button>
                  <div className="border-2 border-purple-900 p-3 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
                    Study
                  </div>
                </button>
              </Link>

              <Link to="/posts">
                <button>
                  <div className="border-2 border-purple-900 p-3 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
                    Coding
                  </div>
                </button>
              </Link></div>

            <div className="flex flex-col gap-10 ">
              <Link to="/posts">
                <button>
                  <div className="border-2 border-purple-900 p-3 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
                    Music
                  </div>
                </button>
              </Link>

              <Link to="/posts">
                <button>
                  <div className="border-2 border-purple-900 p-3 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
                    Dancing
                  </div>
                </button>
              </Link>

              <Link to="/posts">
                <button>
                  <div className="border-2 border-purple-900 p-3 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
                    Palcement
                  </div>
                </button>
              </Link></div></div>


          <Footer />


        </div>

      </div>


    </>
  );
}

export default SubDivision;

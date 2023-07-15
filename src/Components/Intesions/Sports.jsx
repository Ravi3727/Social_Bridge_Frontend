import React from 'react'
import Footer from "../Footer";
import { Link } from 'react-router-dom';


function Sports() {
  return (
    <div className="h-full w-full flex flex-col gap-6 bg-red-100 justify-between">
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-extrabold text-purple-900 ">
        Select Your Sport
      </h1>
      <h1 className="text-2xl font-extrabold text-purple-900">
        Choose any of the following to get a suitable match
      </h1>
    </div>
    <div className="flex flex-wrap gap-8 justify-evenly">
      
      <Link to="/cricketProfile">
          <button>
            <div className="border-2 border-purple-900 p-2 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
              cricket
            </div>
          </button>
        </Link>


      <Link to="/badmontonProfile">
          <button>
            <div className="border-2 border-purple-900 p-2 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
              Badminton
            </div>
          </button>
        </Link>


       <Link to="/hockeyProfile">
          <button>
            <div className="border-2 border-purple-900 p-2 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
              Hockey
            </div>
          </button>
        </Link>

       {/* <Link to="/basketballProfile">
          <button>
            <div className="border-2 border-purple-900 p-2 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
              Basketball
            </div>
          </button>
        </Link>

        <Link to="/tabletennisProfile">
          <button>
            <div className="border-2 border-purple-900 p-2 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
              TableTennis
            </div>
          </button>
        </Link>

        <Link to="/tabletennisProfile">
          <button>
            <div className="border-2 border-purple-900 p-2 rounded-xl w-40 h-14 text-lg font-semibold text-purple-800 bg-purple-200 shadow-2xl border-solid">
              TableTennis
            </div>
          </button>
        </Link> */}

    </div>
    <Footer />
  </div>
  )
}

export default Sports
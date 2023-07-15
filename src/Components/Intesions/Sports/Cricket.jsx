import React from "react";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

function Cricket() {
  return (
    <div className="w-full h-full flex flex-col bg-red-100 justify-between">
      <div className="flex flex-col gap-1">
        <Link to="/sports">
          <button>
            <div className="font-extrabold text-4xl text-blue-800 ml-4">
              &#8678;
            </div>
          </button>
        </Link>

        <div className="mt-4 w-full h-20  border-2 border-purple-900 border-solid rounded-xl p-1 bg-purple-200 flex gap-8 items-center p-2">
          <img
            src=""
            alt="photo"
            className="border-purple-300 border-2 w-14 h-14 rounded-2xl"
          />
          <h1>Name</h1>
        </div>

        <div className="w-full h-20  border-2 border-purple-900 border-solid rounded-xl p-1 bg-purple-200 flex gap-8 items-center p-2">
          <img
            src=""
            alt="photo"
            className="border-purple-300 border-2 w-14 h-14 rounded-2xl"
          />
          <h1>Name</h1>
        </div>

        <div className="w-full h-20  border-2 border-purple-900 border-solid rounded-xl p-1 bg-purple-200 flex gap-8 items-center p-2">
          <img
            src=""
            alt="photo"
            className="border-purple-300 border-2 w-14 h-14 rounded-2xl"
          />
          <h1>Name</h1>
        </div>

        <div className="w-full h-20  border-2 border-purple-900 border-solid rounded-xl p-1 bg-purple-200 flex gap-8 items-center p-2">
          <img
            src=""
            alt="photo"
            className="border-purple-300 border-2 w-14 h-14 rounded-2xl"
          />
          <h1>Name</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cricket;

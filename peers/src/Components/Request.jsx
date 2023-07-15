// import React from "react";
import Footer from "./Footer";
import RequestPost from "./RequestPost";
import { Link } from "react-router-dom";

const ROUTES = {
  HOME: '/',
  MATCHES: '/matches',
};

function Request() {
  return (
    <section className="bg-red-100 w-full h-full flex flex-col overflow-x-hidden overflow-y-hidden">
      <div className="flex bg-red-200 shadow-xl text-purple-900 font-bold text-xl justify-evenly border-2 w-full h-14  p-3 items-center rounded-b-xl gap-4">
        <Link to={ROUTES.HOME}><button>Requests</button></Link>
        <div className="w-1 border-l border-solid border-blue-800"></div>
        <Link to={ROUTES.MATCHES}><button>My Matches</button></Link>
      </div>

      {/* data */}
      <div className="mt-2 h-[80%] rounded-xl">
        <RequestPost/>
      </div>

      <Footer/>
    </section>
  );
}


export default Request;
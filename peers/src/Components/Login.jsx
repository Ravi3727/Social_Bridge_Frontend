import React from "react";
import { Link } from "react-router-dom";
import login from '../Designing/Login.module.css'

function Login() {
  return (
    <>
      <div
        className="w-full h-full  overflow-y-hidden overflow-x-hidden"
        style={{ backgroundColor: "#fdd8d2" }}
      >
        <div className="w-full h-[320px] flex flex-col gap-8 border-black items-center justify-center">
          <div
            className="font-bold text-3xl text-purple-900"
            style={{ fontFamily: " Montserrat', sans-serif" }}
          >
            Let's get Started!
          </div>

          <div className="w-[40%] h-[60%] flex items-center justify-center">
            <img
              src=""
              alt=""
              className="w-[220px] h-[190px] border-2 border-purple-900 rounded-full"
            />
          </div>
        </div>

        <div
          className=" w-full h-[320px] flex flex-col gap-10 border-2 border-purple-400 shadow-2 rounded-t-3xl items-center justify-center bg-purple-900"

        >

           <div className="w-full flex items-center justify-center">
           <Link to="/signUp"><button className={login.btn} style={{ backgroundColor: '#ff9b8b' }}>
              Sign Up
            </button></Link>
          </div>


          <div>
            <p className="text-white items-center justify-center">
              Already Registered? <span> </span>
              <Link to="/signinWithEmail">
                <span className=" underline text-white items-center justify-center">
                  Login In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

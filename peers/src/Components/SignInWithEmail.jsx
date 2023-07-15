import React from "react";
// import Password from './Password';
import { Link } from 'react-router-dom';

function SignInWithEmail() {
  return (
    <>
    <div className="w-full h-full overflow-x-hidden overflow-y-hidden" style={{backgroundColor:'#fdd8d2'}}>

   <Link to="/">
      <button>
        <div className="font-extrabold text-4xl text-purple-900 ml-4">
          &#8678;
        </div>
      </button></Link>
      <div className=" w-full h-full flex flex-col gap-10 items-center"style={{backgroundColor:'#fdd8d2'}}>
        <div
          className="mt-20 text-3xl font-lg font-bold text-purple-900"
          style={{ fontFamily: " Montserrat', sans-serif" }}
        >
          Login Into Your Account
        </div>

        <div className="bg-purple-900 h-full flex border-2 rounded-t-3xl w-full gap-4">
          <div className="flex flex-col gap-10 mt-4 w-full p-2">
            <div className="flex w-full flex-col justify-evenly gap-10 mt-4 p-1">
              <div className="flex flex-col gap-6">
              <label htmlFor="firstname" className="ml-2 text-white text-2xl font-bold">Your Email</label>
              <div className="">
                <input
                  className=" w-56 border-2 border-solid-blue-800  rounded-xl p-1"
                  type="text"
                  placeholder="name@company.com"
                />
              </div></div>

              <div className="flex flex-col gap-4">
              <label htmlFor="firstname" className="ml-2 text-white font-bold text-2xl">Enter Password</label>
              <div className="">
                <input
                  className="mt-2 w-56 border-2 border-solid-blue-800  rounded-xl p-1"
                  type="text"
                  placeholder="@#4wdj"
                />
              </div>
              <Link to = "/forgetPassword">
             <p className="text-white text-sm underline ml-24 -mt-3">
             Forget Password
             </p>
              </Link></div>

            </div>
            <button className="text-white border-2 border-solid border-purple-900 p-1 h-12 rounded-xl text-xl font-bold"style={{ backgroundColor: '#ff9b8b' }}>
              Submit
            </button>
          </div>
        </div>
      </div>

      </div>
    </>
  );
}

export default SignInWithEmail;

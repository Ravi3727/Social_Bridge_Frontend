import React from "react";
// import Password from './Password';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <>
            <div className="w-full h-full overflow-x-hidden overflow-y-hidden" style={{ backgroundColor: '#fdd8d2' }}>

                <Link to="/">
                    <button>
                        <div className="font-extrabold text-4xl text-purple-900 ml-4">
                            &#8678;
                        </div>
                    </button></Link>
                <div className=" w-full h-full flex flex-col gap-4 items-center" style={{ backgroundColor: '#fdd8d2' }}>
                    <div
                        className="mt-20 text-3xl font-lg font-bold text-purple-900"
                        style={{ fontFamily: " Montserrat', sans-serif" }}
                    >
                        Sign Up
                    </div>

                    <div className="bg-purple-900 h-full flex border-2 rounded-t-3xl w-full">
                        <div className="flex flex-col gap-4  w-full p-2">
                            <div className="flex w-full flex-col justify-evenly gap-4 mt-4 p-1">

                                <div>
                                    <label htmlFor="firstname" className="ml-2 text-white">First Name</label>
                                    <div className="">
                                        <input
                                            className=" w-56 border-2 border-solid-blue-800  rounded-xl p-1"
                                            type="text"
                                            placeholder="John "
                                        />
                                    </div></div>

                                <div>
                                    <label htmlFor="firstname" className="ml-2 text-white">Last Name</label>
                                    <div className="">
                                        <input
                                            className=" w-56 border-2 border-solid-blue-800  rounded-xl p-1"
                                            type="text"
                                            placeholder="Smith"
                                        />
                                    </div>
                                </div>


                                <div>
                                    <label htmlFor="firstname" className="ml-2 text-white">Email</label>
                                    <div className="">
                                        <input
                                            className=" w-56 border-2 border-solid-blue-800  rounded-xl p-1"
                                            type="email"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className=" ml-1">
                                <label htmlFor="password" className="text-white ml-2">Password</label>
                                <div className="">
                                    <input
                                        className="w-56  border-2 border-solid-blue-800  rounded-xl p-1"
                                        type="text"
                                        name="password"
                                        id="password"
                                        placeholder="@#45jjd"
                                    />
                                    {/* <Password/> */}
                                </div></div>


                            <div className=" ml-1">
                                <label htmlFor="password" className="text-white ml-2">Confirm Password</label>
                                <div className="">
                                    <input
                                        className="w-56  border-2 border-solid-blue-800  rounded-xl p-1"
                                        type="text"
                                        name="password"
                                        id="password"
                                        placeholder="@#45jjd"
                                    />
                                    {/* <Password/> */}
                                </div></div>

                            <div className="w-74 h-10 p-2 border-2 border-white border-solid rounded-xl  text-purple-900 bg-red-200 font-semibold text-lg flex items-center"><button className="mx-auto">Submit</button></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SignUp;

import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className=' flex gap-4 w-[360px] border-2  p-2 justify-evenly rounded-t-xl shadow-t-xl h-20 max-h-24 items-center text-white text-lg bg-purple-900 ' >
        <Link to="/Explore">
          <h1>Explore</h1></Link>
        <Link to="/Explore/Intensions"><h1>Intension</h1> </Link>
        <Link to="/Explore/request"> <h1>Request</h1>
        </Link>

        <Link to="/Explore/registration/first">
          <h1>Profile</h1></Link>
      </div>

    </>

  )
}

export default Footer
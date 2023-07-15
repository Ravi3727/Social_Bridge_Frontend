// import  { useEffect } from 'react';
// import Swiper from 'swiper/swiper-bundle';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper-bundle.min.js';
// import ExploreCard from './ExploreCard';
// import Footer from './Footer';
// function Explore() {
//   useEffect(() => {
//     const swiper = new Swiper('.swiper-container', {
//       slidesPerView: 'auto',
//       spaceBetween: 20,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   }, []);

//   return (
//     <>
//       <div className='w-full h-full border-2 flex flex-col items-center gap-20 bg-blue-100 justify-evenly'>
//         <div className='text-3xl font-semibold shadow-xl p-1'>
//           <h1>EXPLORE</h1>
//         </div>

//         {/* Card */}
//         <div className='w-[70%] h-[70%] swiper-container'>
//           <div className='swiper-wrapper'>
//             <div className='swiper-slide'>
//               <ExploreCard />
//             </div>
//             <div className='swiper-slide'>
//               <ExploreCard />
//             </div>
//             <div className='swiper-slide'>
//               <ExploreCard />
//             </div>
//             <div className='swiper-slide'>
//               <ExploreCard />
//             </div>
//             <div className='swiper-slide'>
//               <ExploreCard />
//             </div>
//             <div className='swiper-slide'>
//               <ExploreCard />
//             </div>
//             <div className='swiper-slide'>
//               <ExploreCard />
//             </div>
//             <div className='swiper-slide'>
//               <ExploreCard />
//             </div>
//             <div className='swiper-slide'>
//               <ExploreCard />
//             </div>
//             <div className='swiper-slide'>
//               <ExploreCard />
//             </div>
//             <div className='swiper-slide'>
//               <ExploreCard />
//             </div>
//           </div>
//           <div className='swiper-button-next'></div>
//           <div className='swiper-button-prev'></div>
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Explore;

import { useEffect } from "react";
import Swiper from "swiper/swiper-bundle";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.min.js";
import ExploreCard from "./ExploreCard";
import dummyData from "../assets/dummyData";
import Footer from "./Footer";

function Explore() {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <>
        <div
          className="w-full h-full border-2 flex flex-col items-center gap-20  justify-evenly"
          style={{ backgroundColor: "#fdd8d2" }}
        >
          {/* <div className='text-3xl font-semibold shadow-xl p-2 bg-red-600 text-white rounded-xl mt-2 border-white border-2'>
          <h1>EXPLORE</h1>
        </div> */}

          {/* Card */}
          <div className="w-[70%] h-[70%] swiper-container mt-8 box1 bg-purple-400 rounded-xl">
            {/* First */}
            <div className="swiper-wrapper">
              {dummyData.map((data, index) => (
                <div className="swiper-slide" key={index}>
                  <ExploreCard
                    imageSrc={data.imageSrc}
                    name={data.name}
                    branch={data.branch}
                    college={data.college}
                    year={data.year}
                  />
                </div>
              ))}
            </div>
            {/* <div className='swiper-button-next'></div>
          <div className='swiper-button-prev'></div> */}
          </div>
          <Footer />
        </div>

        
    </>
  );
}

export default Explore;

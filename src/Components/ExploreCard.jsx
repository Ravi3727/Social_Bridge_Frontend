import React from 'react';
import PropTypes from 'prop-types';
// import React from 'react'

// function ExploreCard() {
//   return (
//     <div className='bg-blue-300 w-full h-full border-2 rounded-xl border-blue-700 shadow-2xl'>

//         {/* Image div */}
//         <div className='p-1 rounded-t-xl h-[60%] w-full '>
//             <img src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg" alt="Profile" className='h-full w-full rounded-2xl' />
//         </div>

//         {/* Details */}
//         <div className='bg-blue-400 flex flex-col gap-1 w-full h-[40%] border-2 rounded-xl justify-center text-lg p-1 font-semibold shadow-xl'>
//             <h1>Name</h1>
//             <h1>Branch</h1>
//             <h1>Collage</h1>
//             <h1>Year</h1>
//         </div>

        


//      </div>
//   )
// }

// export default ExploreCard



// {/* <div className='text-lg p-1 font-semibold items-center justify-center flex '>
//             <h1>Swip Up To Send Request</h1>
//         </div> */}



function ExploreCard({ imageSrc, name, branch, college, year }) {
  return (
    <section className='bg-purple-400 w-full h-full border-2 rounded-xl border-blue-900'>
      {/* Image div */}
      <figure className='p-1 rounded-t-xl h-[60%] w-full'>
        <img src={imageSrc} alt='Profile' className='h-full w-full rounded-2xl' />
      </figure>

      {/* Details */}
      <div id ="" className='bg-purple-700 flex flex-col gap-4 w-full h-[40%] border-2 rounded-xl justify-center text-lg p-2 font-semibold text-white'>
        <h1>{name}</h1>
        <h1>{branch}</h1>
        <h1>{college}</h1>
        <h1>{year}</h1>
      </div>
    </section>
  );
}

ExploreCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  branch: PropTypes.string.isRequired,
  college: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default ExploreCard;

// function ExploreCard() {
//     return (
//       <div className='bg-blue-300 w-full h-full border-2 rounded-xl border-blue-700 shadow-2xl'>
//         {/* Image div */}
//         <div className='p-1 rounded-t-xl h-[60%] w-full'>
//           <img src='https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg' alt='Profile' className='h-full w-full rounded-2xl' />
//         </div>
  
//         {/* Details */}
//         <div className='bg-blue-400 flex flex-col gap-1 w-full h-[40%] border-2 rounded-xl justify-center text-lg p-1 font-semibold shadow-xl'>
//           <h1>Name</h1>
//           <h1>Branch</h1>
//           <h1>Collage</h1>
//           <h1>Year</h1>
//         </div>
//       </div>
//     );
//   }
  
//   export default ExploreCard;
// import React from 'react'

// function PopUpCreateProfile() {
//   return (
//     <div className='border-2 border-black w-full h-full flex flex-col gap-2 justify-center  items-center rounded-xl bg-blue-700'>
//         <div className='w-[60%] h-[16%] border-2 border-yellow-600 border-solid p-1 items-center flex flex-col rounded-xl shadow-2xl bg-orange-400 backdrop-blur-3xl bg-white/30 ...'>

        
//         <h1 className='text-xl font-semibold leading-10 text-violet-900'>For More Information</h1>
//         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create Profile</button>
//         </div>
//     </div>
//   )
// }

// export default PopUpCreateProfile


import React, { useState } from 'react';

function PopUpCreateProfile() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handlePopupClose = () => {
    setPopupVisible(true);
  };

  return (
    <div className={`w-full h-full ${isPopupVisible ? 'filter blur-sm' : ''}`}>
      <div className='border-2 border-black w-full h-full flex flex-col gap-2 justify-center items-center rounded-xl bg-blue-700'>
        <div className='w-[60%] h-[25%] border-2 border-yellow-600 border-solid p-1 items-center flex flex-col gap-3 rounded-xl shadow-2xl bg-orange-400 backdrop-blur-3xl bg-white/30'>
          <h1 className='text-xl font-semibold leading-10 text-violet-900'>For More Information</h1>
          <button  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded${isPopupVisible ? '' : 'filter blur-sm'}`}>Create Profile</button>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={handlePopupClose}>
            Close Popup
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUpCreateProfile;
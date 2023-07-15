import { useState } from "react";

function UserProfile({ imageSource, name, college, branch, questions, paragraph }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(Array(questions.length).fill(false));

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleDropdown = (index) => {
    const updatedDropdowns = [...isDropdownOpen];
    updatedDropdowns[index] = !updatedDropdowns[index];
    setIsDropdownOpen(updatedDropdowns);
  };

  const truncatedParagraph = (
    <>
      {paragraph}
      <button onClick={handleToggle} className="text-blue-900 italic underline">
        {isExpanded ? "See Less" : "Know More"}
      </button>
    </>
  );

  return (
    <>
      <div className="w-[349px] h-full bg-red-100 flex flex-col justify-between">
        <div className="bg-red-100 flex w-full h-40 gap-2 border-1 border-blue-500 items-center">
          <div className="flex flex-col gap-1 items-center p-2 ">
            {/* Image */}
            <img
              src={imageSource}
              alt=""
              className="border-2 border-purple-900 w-28 h-28 rounded-full shadow-xl"
            />
            <div>
              <h1 className="text-sm font-semibold text-purple-900">{name}</h1>
              <h1 className="text-sm font-semibold text-purple-900">{college}</h1>
            </div>
          </div>

          <div className="mb-10 p-2">
            {/* Details */}
            <h1 className="text-md font-semibold text-purple-900">{name}</h1>
            <h1 className="text-md font-semibold text-purple-900">{college}</h1>
            <h1 className="text-md font-semibold text-purple-900">{branch}</h1>
          </div>
        </div>

        {/* About */}
        <div className="w-[90%] max-h-28 items-center mx-auto p-1 ">
          <h1 className="text-xl font-semibold text-purple-900 p-1">About</h1>
          <p className="font-semibold border-1 rounded-xl shadow-xl border-purple-900 p-1">
            {isExpanded ? paragraph : truncatedParagraph}
          </p>
        </div>

        {/* Questions */}
        <div className="flex flex-col gap-1 h-60 ml-1">
          {questions.map((question, index) => (
            <div className="w-full border-2 border-purple-900 p-1 rounded-xl" key={index}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <h1 className="text-md font-semibold ">{question}</h1>
                <div className="arrow-icon text-md rounded-xl  p-1  font-bold text-green-800">
                  Ans...
                </div>
              </div>
              {isDropdownOpen[index] && (
                <div className="p-2 text-purple-800">
                  <p>
                    {paragraph}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default UserProfile;


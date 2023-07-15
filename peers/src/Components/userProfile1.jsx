import React from "react";
import UserProfile from "./UserProfile";
import Footer from "./Footer";

function userProfile1() {
  return (
    <div className="flex flex-col justify-between h-full w-full items-center"> 
    <div className="h-full text-purple-900 w-full overflow-x-hidden justify-betweenflex-col h-[90%] bg-red-100" >
      <UserProfile
        imageSource="https://example.com/profile-image.jpg"
        name="John Doe"
        college="ABC University"
        branch="Computer Science"
        questions={["Describe Yourself brifly.", "What do you like to do in your free time?", "Name Your always Top 5 favourite songs?", "Name 5 areas in which you want to improve", "Write about an important event in your life?","If you could have superpowers, what would it be and why?","If you were not in DTU then what would you be doing?","If you could with be anyone in the world for 10 minutes who would it be and why?"]}
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmd tempor."
      />
      
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default userProfile1;

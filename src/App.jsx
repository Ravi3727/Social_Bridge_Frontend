import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "./Components/UserProfile";
import Login from "./Components/Login";
import SignInWithEmail from "./Components/SignInWithEmail";
import Password from "./Components/Password";
import SignUp from "./Components/SignUp";
import Intrest from "./Components/Intrest";
import Explore from './Components/Explore';
// import PopUpCreateProfile from "./Components/PopUpCreateProfile";
import Request from './Components/Request';
import MatchesCard from './Components/MatchesCard';
import First from './Components/Registration/First';
import Second from "./Components/Registration/Second";
import Third from "./Components/Registration/Third";
import Third2 from "./Components/Registration/Third2";

import UserProfile1 from "./Components/userProfile1";


import Intension from "./Components/Intesions/Intension";
// import SubDivision from "./Components/Intesions/SubDivision";
// import Posts from "./Components/Intesions/Posts";
// import Sports from "./Components/Intesions/Sports";
// import Cricket from "./Components/Intesions/Sports/Cricket";
// import Badminton from "./Components/Intesions/Sports/Badminton";
// import Hockey from "./Components/Intesions/Sports/Hockey";

function App() {
  return (
    <div className="font-link App w-[360px] h-[640px] border-2 border-solid-black">
      
      {/* <UserProfile/> */}
      {/* <PopUpCreateProfile/> */}
      <Router>
        <Routes>
        {/* <Route path="/registration/first" element={<First />} /> */}
           <Route path="/Explore/registration/first" element={<First />} />
           <Route path="/signUp" element={<SignUp />} />
          <Route path="/registration/second" element={<Second />} />
          <Route path="/registration/Intrest" element={<Intrest />} />
          <Route path="/registration/third" element={<Third />} />
          <Route path="/registration/third2" element={<Third2 />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/signinWithEmail" element={<SignInWithEmail />} />
          {/* <Route path="/signin" element={<SignIn />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/userProfile1" element={<UserProfile1 />} />  
          <Route path="/Explore/request" element={<Request />} />
          
          {/* <Route path="/signin" element={<SignIn />} />  */}
          <Route path="/matches" element={<MatchesCard/>}/>
          <Route path="/forgetPassword" element={<Password />} />
          {/* <Route path="/sports" element={<Sports />} /> */}



          <Route path="/Explore/Intensions" element={<Intension />} />
          {/* <Route path="/subdevision" element={<SubDivision />} /> 
          <Route path="/posts" element={<Posts />} />  */}
         
          {/* <Route path="/cricketprofile" element={<Cricket />} />
           <Route path="/Badmintonprofile" element={<Badminton />} />
          <Route path="/hockeyprofile" element={<Hockey />} /> */}

        </Routes>
      </Router>
      {/* <Explore/> */}
      {/* <Request/> */}
      {/* <First/> */}
      {/* <Second/> */}
      {/* <Third/> */}
      {/* <Intension/> */}
      {/* <Sports/> */}
    </div>
  );
}

export default App;

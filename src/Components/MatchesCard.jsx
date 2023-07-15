import PropTypes from 'prop-types';
import MatchItem from './MatchItem';
// import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function MatchesCard({ matches }) {
  return (
    <>
      <div className="w-full h-full overflow-x-hidden overflow-y-hidden flex flex-col bg-blue-300">
        <div className="flex bg-blue-500 shadow-xl justify-evenly border-2 w-full h-14  p-3 items-center rounded-b-xl gap-4">
          <Link to="/">
            <span>Requests</span>
          </Link>
          <div className="w-1 border-2 border-solid rounded-xl h-14 bg-blue-800"></div>
          <Link to="/matches">
            <span>My Matches</span>
          </Link>
        </div>

        <div className="h-[80%] mt-2 rounden-xl">
          <div className="text-xl font-semibold mb-2 shadow-xl items-center flex justify-center">
            <h1 className="">Has Accepted Your Request</h1>
          </div>
          <div className="flex flex-col gap-1">
            {matches.map((match, index) => (
              <MatchItem key={index} match={match} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

MatchesCard.propTypes = {
  matches: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default MatchesCard;
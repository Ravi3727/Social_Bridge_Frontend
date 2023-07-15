import  { useState } from "react";
import Footer from "./Footer";
import {Link} from 'react-router-dom';

function Button({ isClicked, handleClick, text }) {
  return (
    <div
      className={
        isClicked
          ? 'border-2 border-purple-900 border-solid p-1 rounded-xl bg-green-500 text-white'
          : 'border-2 border-purple-900 border-solid p-1 rounded-xl bg-purple-900 text-white'
      }
    >
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

function Intrest() {
  const [buttons, setButtons] = useState([
    { isClicked: false, handleClick: () => handleClick(0), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(1), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(2), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(3), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(4), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(5), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(6), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(7), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(8), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(9), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(10), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(11), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(12), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(13), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(14), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(15), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(16), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(17), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(18), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(19), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(20), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(21), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(22), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(23), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(24), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(25), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(26), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(27), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(28), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(29), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(30), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(31), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(32), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(33), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(34), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(35), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(36), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(37), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(38), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(39), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(40), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(41), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(42), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(43), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(44), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(45), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(46), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(47), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(48), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(49), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(50), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(51), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(52), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(53), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(54), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(55), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(56), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(57), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(58), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(59), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(60), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(61), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(62), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(63), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(64), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(65), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(66), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(67), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(68), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(69), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(70), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(71), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(72), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(73), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(74), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(75), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(76), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(77), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(78), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(79), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(80), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(81), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(82), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(83), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(84), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(85), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(86), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(87), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(88), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(89), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(90), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(91), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(92), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(93), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(94), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(95), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(96), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(97), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(98), text: 'SINGING' },
    { isClicked: false, handleClick: () => handleClick(99), text: 'SINGING' },
  ]);

  const handleClick = (index) => {
    const updatedButtons = [...buttons];
    updatedButtons[index].isClicked = !updatedButtons[index].isClicked;
    setButtons(updatedButtons);
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-full h-full bg-red-100">
        <div className="flex gap-4">

        <Link to="/registration/second"> <div className="p-2"> 
            <button className="border-2 border-purple-900 border-solid p-1 rounded-xl text-white bg-purple-900 w-20 font-bold">Prev</button>

          </div></Link>


          <div>

          
          <h1 className="text-4xl font-extrabold border-1 text-purple-900 shadow-xl p-1">
            INTREST
          </h1></div>
        </div>
        <div className=" flex flex-col gap-4  overflow-y-scroll ">
        <div className="w-[90%]  text-center text-purple-900 text-xl font-semibold">

          

          
            <p>
              To Find Your Suitable Matches Choose Any
              <span className="text-red-900 text-xl font-lg font-bold">
                {' '}
                5{' '}
              </span>
              Intrests
            </p>     
          </div>
          {/* First Row */}
          <div className="flex justify-evenly">
            {buttons.slice(0, 4).map((button, index) => (
              <Button
                key={index}
                isClicked={button.isClicked}
                handleClick={button.handleClick}
                text={button.text}
              />
            ))}
          </div>
          {/* Second Row */}
          <div className="flex justify-evenly ">
            {buttons.slice(4, 8).map((button, index) => (
              <Button
                key={index}
                isClicked={button.isClicked}
                handleClick={button.handleClick}
                text={button.text}
              />
            ))}
          </div>
          {/* Third row */}
          <div className="flex justify-evenly ">
            {buttons.slice(8, 12).map((button, index) => (
              <Button
                key={index}
                isClicked={button.isClicked}
                handleClick={button.handleClick}
                text={button.text}
              />
            ))}
          </div>
          {/* Fourth Row */}
          <div className="flex justify-evenly ">
            {buttons.slice(12, 16).map((button, index) => (
              <Button
                key={index}
                isClicked={button.isClicked}
                handleClick={button.handleClick}
                text={button.text}
              />
            ))}
          </div>
          {/* Fifth Row */}
          <div className="flex justify-evenly ">
            {buttons.slice(16, 20).map((button, index) => (
              <Button
                key={index}
                isClicked={button.isClicked}
                handleClick={button.handleClick}
                text={button.text}
              />
            ))}
          </div>
          {/* Sixth Row */}
          <div className="flex justify-evenly ">
            {buttons.slice(20, 24).map((button, index) => (
              <Button
                key={index}
                isClicked={button.isClicked}
                handleClick={button.handleClick}
                text={button.text}
              />
            ))}
          </div>
          {/* Seventh Row */}
          <div className="flex justify-evenly ">
            {buttons.slice(24, 28).map((button, index) => (
              <Button
                key={index}
                isClicked={button.isClicked}
                handleClick={button.handleClick}
                text={button.text}
              />
            ))}
          </div>
          {/* Eighth Row */}
          <div className="flex justify-evenly ">
            {buttons.slice(28, 32).map((button, index) => (
              <Button
                key={index}
                isClicked={button.isClicked}
                handleClick={button.handleClick}
                text={button.text}
              />
            ))}
          </div>
          {/* Ninth Row */}
          <div className="flex justify-evenly ">
            {buttons.slice(32, 36).map((button, index) => (
              <Button
                key={index}
                isClicked={button.isClicked}
                handleClick={button.handleClick}
                text={button.text}
              />
            ))}
          </div>
          {/* Tenth Row */}
          <div className="flex justify-evenly ">
            {buttons.slice(36, 40).map((button, index) => (
              <Button
                key={index}
                isClicked={button.isClicked}
                handleClick={button.handleClick}
                text={button.text}
              />
            ))}
          </div>
          {/* Other */}
          <div className="w-[90%]  text-white p-1 rounded-xl mx-auto text-center text-lg font-bold shadow-xl border-solid flex gap-2">
<div> 
            <input type="text" name="other" id="other"placeholder="Other..." className="p-1 rounded-xl w-full bg-purple-900 h-12 border-2 border-purple-900 border-solid"/></div>

           <Link to="/registration/third"> <div className="p-2"> 
            <button className="border-2 border-purple-900 border-solid p-1 rounded-xl text-white bg-purple-900 w-20 font-bold">Next</button>

          </div></Link> 
          </div>
        </div>
        <div>
        <Footer/>
        </div>
        
      </div>
    </>
  );
}

export default Intrest;
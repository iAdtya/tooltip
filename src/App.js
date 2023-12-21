import ToolTip from "./Tooltip";
import { useState } from "react";

function App() {
  const [selectButton, setSelectButton] = useState("top");

  const [pos, setPos] = useState("top");

  const handleClick = (e) => {
    setPos((prevPos) => {
      return (prevPos = e.target.value);
    });
    setSelectButton(e.target.value);
  };

  return (
    <>
      <div className="bg-slate-900 h-screen flex items-center justify-center text-white absolute inset-0  w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] ">
        <div className="text-center ">
          <h1 className="text-orange-200 mb-4 font-bold text-4xl">
            Coding Ninjas React Skill Test!!
          </h1>
          <p className="mb-24 font-bold text-2xl ">
            Hover over the Button to see the ToolTip in your specified
            direction!!
          </p>

          {/* <div className="flex w-max gap-4 "> */}
          <button
            onClick={handleClick}
            value="right"
            className={`bg-blue-700  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ${
              selectButton === "right" ? "selected" : ""
            }`}
          >
            Right
          </button>
          <button
            onClick={handleClick}
            value="left"
            className={`bg-[#c084fc] ml-4 hover:bg-[#c084fc] text-white font-bold py-2 px-4 rounded-lg ${
              selectButton === "left" ? "selected" : ""
            }`}
          >
            Left
          </button>
          <button
            onClick={handleClick}
            value="top"
            className={`bg-[#a3e635] ml-4 hover:bg-[#a3e635] text-white font-bold py-2 px-4 rounded-lg ${
              selectButton === "top" ? "selected" : ""
            }`}
          >
            Top
          </button>
          <button
            onClick={handleClick}
            value="bottom"
            className={` bg-[#fbbf24] ml-4 hover:bg-[#fbbf24]  text-white font-bold py-2 px-4 rounded-lg ${
              selectButton === "bottom" ? "selected" : ""
            }`}
          >
            Bottom
          </button>
          {/* </div> */}
          <ToolTip position={pos} />
        </div>
      </div>
    </>
  );
}

export default App;

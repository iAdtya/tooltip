import React, { useState } from "react";

function Tooltip({ position }) {
  const [visible, setVisible] = useState(false);

  const handleMouseOn = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div className="relative flex justify-center items-center  border-b border-black border-dotted mt-16 w-36 p-2 rounded-ful font-bold">
      <div className="flex justify-center items-center w-full h-full">
        <button
          className="bg-green-700 text-white px-4 py-2 rounded"
          onMouseOver={handleMouseOn}
          onMouseOut={handleMouseLeave}
        >
          Hover Over Me!!
        </button>
      </div>
      {visible && (
        <div
          className={`absolute z-10 px-3 py-2 text-white bg-violet-700 rounded shadow tooltip ${position}`}
        >
          Tooltip on {position}
        </div>
      )}
    </div>
  );
}

export default Tooltip;

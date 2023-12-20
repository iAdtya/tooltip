import React from "react";
import { useState } from "react";

export default function ToolTip({ position }) {
  const [flag, setFlag] = useState(false);

  const handleMouseOn = () => {
    setFlag(true);
  };

  const handleMouseLeave = () => {
    setFlag(false);
  };

  const visible = { display: flag ? "block" : "none" };

  return (
    <>
      <div>
        <button
          className="bg-violet-600 h-20 w-28 rounded-xl"
          data-tooltip-target="tooltip-light"
          data-tooltip-style="light"
          type="button"
          onMouseOver={handleMouseOn}
          onMouseOut={handleMouseLeave}
        >
          Hover Over Me!!
        </button>
        <div
          id="tooltip-light"
          role="tooltip"
          className={`${position}`}
          style={visible}
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
        >
          i am {position} tip
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </>
  );
}

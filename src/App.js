import ToolTip from "./Tooltip";

function App() {
  const handleClick = (e) => {};
  return (
    <>
      <div className="bg-slate-900 h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-orange-200 mb-4 font-bold text-4xl">
            Coding Ninjas React Skill Test!!
          </h1>
          <p className="mb-24 font-bold text-2xl ">
            Hover over the Button to see the ToolTip in your specified
            direction!!
          </p>

          <div>
            <button
              onClick={handleClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Right
            </button>
            <button
              onClick={handleClick}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Left
            </button>
            <button
              onClick={handleClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Top
            </button>
            <button
              onClick={handleClick}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            >
              Bottom
            </button>
          </div>
        </div>

        <ToolTip />
      </div>
    </>
  );
}

export default App;

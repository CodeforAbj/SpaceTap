import { useValue } from "../context/customTapContext";

const SubHeader = () => {
  //TODO: Get UserInfo implementation

  const value = useValue();
  if (!value) {
    console.error("useValue must be used within TapProvider");
    return null;
  }

  const { username } = value;

  return (
    <div
      id="subHeaderComponent"
      className="w-full bg-black text-white font-bold flex flex-col max-w-xl"
    >
      <div className="px-4 z-10">
        <div className="flex justify-between pt-4">
          <div className="flex items-center space-x-2 ">
            <div className="p-1 rounded-lg bg-[#1d2025]">T</div>
            <div>
              <p className="text-sm"> {username} </p>
            </div>
          </div>

          {/* button for extra functionality */}
          <div className="p-1 text-sm">
            <button
              className="px-6 py-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-gray-800 
             text-white font-bold  rounded-lg shadow-lg
              hover:shadow-cyan-500/50 
              hover:bg-gradient-to-r hover:from-gray-800 hover:via-blue-500 hover:to-cyan-500 transition-transform transform hover:scale-105 duration-300"
            >
              Coming Soon...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubHeader;

import { useValue } from "../context/customTapContext";
import FuelBar from "./Game UI/FuelBar";
import MultiplierBar from "./Game UI/MultiplierBar";
import PointsDisplay from "./Game UI/PointsDisplay";
import ProgressBar from "./Game UI/ProgressBar";
import TouchArea from "./Game UI/TouchArea";

const Display_Container = () => {
  const value = useValue();
  if (!value) {
    console.error("context error");
    return null;
  }
  const { background } = value;
  return (
    <div
      id="displayContainer"
      className="flex-grow mt-4 bg-[#00AEEF] rounded-t-[48px] top-glow z-0 relative "
    >
      <div className="absolute top-[5px] left-0 right-0 bottom-0 bg-black rounded-t-[46px] p-2 ">
        <div
          className={`absolute top-[10px] left-0 right-0 bottom-0  rounded-t-[42px] p-2   ${background}`}
        >
          {/* Game UI */}

          <div id="gameUi" className="flex flex-col items-center">
            <MultiplierBar />
            <PointsDisplay />
            <div className="flex justify-between w-80 ">
              {/* to switch flex direction */}
              <FuelBar />
              <TouchArea />
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Display_Container;

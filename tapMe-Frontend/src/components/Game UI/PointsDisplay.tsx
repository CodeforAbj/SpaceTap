import rupee from "../../assets/rupee.png";
import { useValue } from "../../context/customTapContext";

const PointsDisplay = () => {
  const value = useValue();
  if (!value) {
    console.error("context error");
    return null;
  }
  const { points, pointsMultiplier, animation } = value;

  return (
    <div
      id="pointsDisplayCotainer"
      className=" flex flex-col items-center mb-2"
    >
      <div>
        {/* points display */}

        <div
          id="coinConatiner"
          className=" pt-4 pb-1 flex items-center space-x-2"
        >
          <div className="relative">
            <img src={rupee} alt="rupee coin" className="w-10 h-10" />
            {animation && (
              <div
                className={`font-extrabold text-amber-300 text-2xl absolute bottom-2/3 left-3/4 `}
              >
                +{pointsMultiplier}
              </div>
            )}
          </div>

          <p className="text-4xl text-white">{points.toLocaleString()}</p>
        </div>
      </div>
      <div>
        {/* levelNameDisplay */}
        <div id="levelNameContainer" className="">
          <h3 className=" drop-shadow-[0px_0px_28px_rgba(244,208,26,0.9)] text-xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-white  to-amber-400 ">
            {value.getLevelName()}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PointsDisplay;

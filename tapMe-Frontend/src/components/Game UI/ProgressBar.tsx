import { useValue } from "../../context/customTapContext";

const ProgressBar = () => {
  const value = useValue();
  if (!value) {
    console.error("context error");
    return null;
  }

  const { progressDivRef, levelIndex, spaceMilestones } = value;

  return (
    <div>
      <div className="flex flex-col items-center ">
        <div>
          <p className="text-sm text-white font-extrabold">
            {" "}
            {spaceMilestones[levelIndex + 1].distanceFromEarth}{" "}
          </p>
        </div>
        <div className="relative w-2 h-64 bg-gray-600 rounded">
          <div
            ref={progressDivRef}
            className="absolute rounded bottom-0 w-full bg-gradient-to-t from-green-400 to-violet-700"
          ></div>
        </div>
        <div>
          <p className="text-sm text-white font-bold">Progress</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

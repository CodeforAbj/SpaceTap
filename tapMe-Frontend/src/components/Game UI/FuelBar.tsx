import { useEffect } from "react";
import { useValue } from "../../context/customTapContext";

const FuelBar = () => {
  const value = useValue();
  if (!value) {
    console.error("context error");
    return null;
  }

  const { fuelDivRef, levelIndex, fuel, setFuel, spaceMilestones } = value;

  useEffect(() => {
    const intervalId = setInterval(() => {
      let fuelLimit = spaceMilestones[levelIndex].maxFuel;

      setFuel((prevFuel: number) => {
        if (prevFuel >= fuelLimit) {
          return prevFuel; // Return the current fuel if maxed
        }

        return prevFuel + 1; // Increment fuel
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [levelIndex]); // Add levelIndex as a dependency if it can change

  return (
    <div className="w-10">
      <div className="flex flex-col items-center ">
        <div>
          <p className="text-sm text-white font-extrabold">Fuel</p>
        </div>
        <div className="relative w-2 h-64 bg-gray-600 rounded">
          <div
            ref={fuelDivRef}
            className="absolute bottom-0 w-full bg-gradient-to-t rounded from-red-500 to-amber-400"
          ></div>
        </div>
        <div>
          <p className="text-sm text-white font-bold">
            {fuel}/{spaceMilestones[levelIndex].maxFuel}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FuelBar;

import { useEffect, useRef } from "react";
import spaceMilestones from "../Data/referenceData";
//import useLevelManagement from "./useLevelManagement";
const useFuelManagement = (levelIndex: number, fuel: number) => {
  //const { levelIndex } = useLevelManagement();
  //  const [fuel, setFuel] = useState(spaceMilestones[levelIndex].maxFuel); // initialize with DB data or first fuel base

  const fuelDivRef = useRef<HTMLDivElement>(null);

  // To setup Fuel Bar
  const getFuelPercentage = () => {
    let fuelLimit: number = spaceMilestones[levelIndex].maxFuel;
    let progress: number = (fuel / fuelLimit) * 100;
    return progress;
  };

  useEffect(() => {
    if (fuelDivRef.current) {
      const height = getFuelPercentage(); // height of fuel bar is 64px
      fuelDivRef.current.style.height = `${height}%`; // update height based on state
    }
  }, [fuel]);

  // Function to show empty fuel
  const showFuelEmpty = () => {
    if (fuelDivRef.current) {
      const parentElement = fuelDivRef.current.parentElement;
      if (parentElement) {
        parentElement.classList.add("shake");
        setTimeout(() => {
          parentElement.classList.remove("shake");
        }, 500);
      } else {
        console.error("Parent element not found");
      }
    } else {
      console.error("fuelDivRef is not set");
    }
  };

  return { fuelDivRef, showFuelEmpty };
};

export default useFuelManagement;

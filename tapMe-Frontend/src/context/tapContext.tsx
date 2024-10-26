import { useContext, createContext, useState, useRef, useEffect } from "react";

import spaceMilestones from "../Data/referenceData.ts";

// ##################################################################### //
// ###################### Central State Management ##################### //
// ##################################################################### //

// -------------- Task List -------------- //

//  Features:
//   1. Tapping main item should increase point only when there is fuel | Done
//   2. Tapping main item should decrease fuel | Done
//   3. Increase and Decrease Multiplier feature | Done
//   4. Fuel Recharging feauture | Done
//   5. updating level feature | Done
//   6. Background changing feature | Done
//   7. Addtional feature of showing additon

interface tapContextType {
  fuel: number;
  points: number;
  levelIndex: number;
  animation: boolean;
  background: string;
  spaceMilestones: Array<{
    name: string;
    distanceFromEarth: number;
    maxFuel: number;
    bgGradient: string;
  }>;
  fuelDivRef: React.RefObject<HTMLDivElement>;
  progressDivRef: React.RefObject<HTMLDivElement>;
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  increaseMultiplier: () => void;
  decreaseMultiplier: () => void;
  setFuel: (state: any) => void;
  getLevelName: () => string;

  pointsMultiplier: number;
}

const tapContext = createContext<tapContextType | undefined>(undefined);

// Function to provie context values
function useValue() {
  const value = useContext(tapContext);
  return value;
}

// Provider component
function CustomTapContext({ children }: { children: React.ReactNode }) {
  const [levelIndex, setLevelIndex] = useState<number>(0); // Level Tracker
  const [points, setPoints] = useState<number>(0); // Points or coins
  const [pointsMultiplier, setPointsMultiplier] = useState<number>(1); // Multiplier
  const [fuel, setFuel] = useState<number>(spaceMilestones[levelIndex].maxFuel); // Fuel or energy level
  const [animation, setAnimation] = useState<boolean>(false);
  const [background, setBackground] = useState<string>(
    spaceMilestones[levelIndex].bgGradient
  );
  const fuelDivRef = useRef<HTMLDivElement>(null);
  const progressDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentLevel: number = 0;
    for (let index = 0; index < spaceMilestones.length; index++) {
      const level = spaceMilestones[index];
      console.log(level);
      if (points < level.distanceFromEarth) {
        currentLevel = index - 1;
        break; // Use break to exit the loop when the condition is met
      }
    }

    setLevelIndex(currentLevel);
  }, [points]);
  useEffect(() => {
    const gradient = spaceMilestones[levelIndex].bgGradient;
    setBackground(gradient);
    // Change the background
  }, [levelIndex]);

  const handleClick = () => {
    if (fuel > pointsMultiplier) {
      // for animation
      setAnimation(true);

      setTimeout(() => {
        setAnimation(false);
      }, 250);

      // Increase points and reduce fuel
      setPoints(points + pointsMultiplier);
      setFuel(fuel - pointsMultiplier);
    } else {
      // Animate fuel bar
      if (fuelDivRef.current) {
        fuelDivRef.current.classList.add("shake");
        setTimeout(() => {
          if (fuelDivRef.current) {
            fuelDivRef.current.classList.remove("shake");
          }
        }, 500); // Duration of the shake animation
      }
    }
  }; // done

  const increaseMultiplier = () => {
    let multiplierLimit = spaceMilestones[levelIndex].maxFuel;
    if (pointsMultiplier * 2 >= multiplierLimit) return; // so that fuel doesn't get negative;
    setPointsMultiplier(pointsMultiplier * 2);
  };

  const decreaseMultiplier = () => {
    if (pointsMultiplier <= 1) return;
    setPointsMultiplier(pointsMultiplier / 2);
  };

  const getLevelName = () => {
    if (levelIndex >= spaceMilestones.length) return "Beyond Space ";
    return spaceMilestones[levelIndex].name;
  }; // done

  const getFuelPercentage = () => {
    let fuelLimit: number = spaceMilestones[levelIndex].maxFuel;
    let progress: number = (fuel / fuelLimit) * 100;
    return progress;
  };

  const getProgress = () => {
    if (levelIndex >= spaceMilestones.length - 1) {
      return 100;
    }
    const currentLevelMin = spaceMilestones[levelIndex].distanceFromEarth;
    const nextLevelMin = spaceMilestones[levelIndex + 1].distanceFromEarth;
    const progress =
      ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  useEffect(() => {
    if (fuelDivRef.current) {
      const height = getFuelPercentage(); // height of fuel bar is 64px
      fuelDivRef.current.style.height = `${height}%`; // update height based on state
    }
  }, [fuel]);
  useEffect(() => {
    if (progressDivRef.current) {
      const height = getProgress(); // height of fuel bar is 64px
      progressDivRef.current.style.height = `${height}%`; // update height based on state
    }
  }, [fuel]);

  return (
    <tapContext.Provider
      value={{
        handleClick,
        fuel,
        points,
        levelIndex,
        spaceMilestones,
        background,
        fuelDivRef,
        pointsMultiplier,
        animation,
        progressDivRef,
        decreaseMultiplier,
        increaseMultiplier,
        setFuel,
        getLevelName,
      }}
    >
      {children}
    </tapContext.Provider>
  );
}

export { useValue, CustomTapContext };

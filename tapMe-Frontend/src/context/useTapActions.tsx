import { useState } from "react";
import spaceMilestones from "../Data/referenceData";

interface TapActionsProps {
  fuel: number;
  setFuel: (fuel: number) => void;
  points: number;
  setPoints: (points: number) => void;
  pointsMultiplier: number;
  setPointsMultiplier: (multiplier: number) => void;
  showFuelEmpty: () => void;
  levelIndex: number;
}

const useTapActions = ({
  fuel,
  setFuel,
  points,
  setPoints,
  levelIndex,
  pointsMultiplier,
  setPointsMultiplier,
  showFuelEmpty,
}: TapActionsProps) => {
  const [animation, setAnimation] = useState(false);

  // ====================================================== //
  // ========= Main logic of app : handling touch ========= //
  // ====================================================== //

  const handleClick = () => {
    if (fuel > pointsMultiplier) {
      // ---------- Animation trigger ---------- //
      setAnimation(true);
      setTimeout(() => setAnimation(false), 250);

      // Update Points
      setPoints(points + pointsMultiplier);
      // Reduce Fuel
      setFuel(fuel - pointsMultiplier);

      // Save to DB logic
    } else {
      // indicating empty fuel
      showFuelEmpty();
    }
  };

  const increaseMultiplier = () => {
    let multiplierLimit = spaceMilestones[levelIndex].maxFuel;
    if (pointsMultiplier * 2 >= multiplierLimit) return; // so that fuel doesn't get negative;
    setPointsMultiplier(pointsMultiplier * 2);
  };
  const decreaseMultiplier = () => {
    if (pointsMultiplier <= 1) return; // to keep multiplier positive
    setPointsMultiplier(pointsMultiplier / 2);
  };

  return { handleClick, increaseMultiplier, decreaseMultiplier, animation };
};

export default useTapActions;

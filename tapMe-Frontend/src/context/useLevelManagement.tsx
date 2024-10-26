import { useState, useEffect, useRef, useMemo } from "react";
import spaceMilestones from "../Data/referenceData";

const useLevelManagement = (fuel: number, points: number, setPoints: any) => {
  const [levelIndex, setLevelIndex] = useState(0);

  const [pointsMultiplier, setPointsMultiplier] = useState(1);

  const [background, setBackground] = useState(spaceMilestones[0].bgGradient);
  const progressDivRef = useRef<HTMLDivElement>(null);

  // ====================================================== //
  // ===== Logic to update Level and save points to DB ===== //
  // ====================================================== //
  // Calculated current level with useMemo
  const currentLevel = useMemo(() => {
    let calculatedLevel = levelIndex;
    for (let index = 0; index < spaceMilestones.length; index++) {
      if (points < spaceMilestones[index].distanceFromEarth) {
        calculatedLevel = index - 1;
        break;
      }
    }

    return calculatedLevel;
  }, [points]);

  // useEffect to update the levelIndex state
  useEffect(() => {
    setLevelIndex(currentLevel);
  }, [currentLevel]);
  //TODO: DB update
  // ------------------------------------------------------------------------------ //
  // ------ Logic to update background ----- //
  useEffect(
    () => setBackground(spaceMilestones[levelIndex]?.bgGradient || ""),
    [levelIndex]
  );

  // ------------------------------------------------------------------------------ //

  // ====================================================== //
  // ========= Logic to Update Level Progress Bar ========= //
  // ====================================================== //

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
    if (progressDivRef.current) {
      const height = getProgress(); // height of fuel bar is 64px
      progressDivRef.current.style.height = `${height}%`; // update height based on state
    }
  }, [fuel]);

  // ------------------------------------------------------------------------------ //

  const getLevelName = () =>
    spaceMilestones[levelIndex]?.name || "Beyond Space";

  return {
    points,
    setPoints,
    background,
    getLevelName,
    pointsMultiplier,
    setPointsMultiplier,
    progressDivRef,
    levelIndex,
  };
};

export default useLevelManagement;

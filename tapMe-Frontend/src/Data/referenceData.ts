// ##################################################################### //
// ########################## Game Level Data ########################## //
// ##################################################################### //
export interface GameLevelData {
  name: string;
  distanceFromEarth: number;
  maxFuel: number;
  bgGradient: string; // Background gradient color
}
const spaceMilestones: GameLevelData[] = [
  {
    name: "Troposphere",
    distanceFromEarth: 0,
    maxFuel: 100,
    bgGradient:
      "bg-gradient-to-b from-cyan-500 from-40% via-white via-60% to-green-900    ",
  }, // Earth's surface
  {
    name: "Stratosphere",
    distanceFromEarth: 50,
    maxFuel: 120,
    bgGradient:
      "bg-gradient-to-t from-blue-500 from-20% via-indigo-800 via-50% to-gray-900",
  }, // Approx 50 km above Earth's surface
  {
    name: "Mesosphere",
    distanceFromEarth: 85,
    maxFuel: 150,
    bgGradient:
      "bg-gradient-to-b from-purple-800 from-10% via-black via-30% to-blue-800",
  }, // Approx 85 km above Earth's surface
  {
    name: "Thermosphere",
    distanceFromEarth: 600,
    maxFuel: 200,
    bgGradient:
      "bg-gradient-to-b from-black from-40% via-blue-600 via-60% to-purple-900",
  }, // Approx 600 km above Earth's surface
  {
    name: "Low Earth Orbit (LEO)",
    distanceFromEarth: 2000,
    maxFuel: 250,
    bgGradient:
      "bg-gradient-to-b from-black from-40% via-blue-300 via-80% to-sky-600",
  }, // Approx 2,000 km altitude (LEO satellites)
  {
    name: "Geostationary Orbit (GEO)",
    distanceFromEarth: 35786,
    maxFuel: 500,
    bgGradient:
      "bg-gradient-to-b from-black from-40% via-gray-800 via-60% to-blue-800",
  }, // Approx 35,786 km above Earth's surface
  {
    name: "Moon",
    distanceFromEarth: 384400,
    maxFuel: 750,
    bgGradient:
      "bg-gradient-to-b from-black from-60% via-white via-80% to-gray-500",
  }, // Avg 384,400 km from Earth
  {
    name: "Mars",
    distanceFromEarth: 225000000,
    maxFuel: 1000,
    bgGradient:
      "bg-gradient-to-b from-black from-40% via-orange-400 via-60% to-red-700",
  }, // Approx 225 million km from Earth
  {
    name: "Jupiter",
    distanceFromEarth: 778500000,
    maxFuel: 1500,
    bgGradient:
      "bg-gradient-to-b from-black from-40% via-brown-400 via-60% to-yellow-800",
  }, // Approx 778.5 million km from Earth
  {
    name: "Saturn",
    distanceFromEarth: 1434000000,
    maxFuel: 2000,
    bgGradient:
      "bg-gradient-to-b from-black from-40% via-goldenrod via-60% to-violet-900",
  }, // Approx 1.434 billion km from Earth
  {
    name: "Uranus",
    distanceFromEarth: 2871000000,
    maxFuel: 2500,
    bgGradient:
      "bg-gradient-to-b from-black from-40% via-lightblue-300 via-60% to-teal-600",
  }, // Approx 2.871 billion km from Earth
  {
    name: "Neptune",
    distanceFromEarth: 4495000000,
    maxFuel: 3000,
    bgGradient:
      "bg-gradient-to-b from-black from-40% via-blue-700 via-60% to-blue-900",
  }, // Approx 4.495 billion km from Earth
  {
    name: "Pluto",
    distanceFromEarth: 5900000000,
    maxFuel: 5000,
    bgGradient:
      "bg-gradient-to-b from-black from-40% via-yellow-100 via-80% to-red-800",
  }, // Approx 5.9 billion km from Earth
  {
    name: "Game Over",
    distanceFromEarth: 100000000000,
    maxFuel: 5000,
    bgGradient:
      "bg-gradient-to-b from-black from-40% via-gray-600 via-60% to-gray-900",
  }, // Beyond Space
];

export default spaceMilestones;

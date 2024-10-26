import React, {
  createContext,
  useRef,
  useContext,
  useState,
  useEffect,
} from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
} from "@apollo/client";
import { GET_PLAYER } from "../graphql/queries";
import { SAVE_PLAYER } from "../graphql/mutations";
import { useLocation } from "react-router-dom"; //
import { GameLevelData } from "../Data/referenceData";
import spaceMilestones from "../Data/referenceData";
import useTapActions from "./useTapActions";
import useFuelManagement from "./useFuelManagement";
import useLevelManagement from "./useLevelManagement";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URL, // Fetching from environment variable
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`, // Adding auth token
  },
  cache: new InMemoryCache(),
});

interface CustomTapContextType {
  fuel: number;
  points: number;
  username: string;
  levelIndex: number;
  animation: boolean;
  background: string;
  spaceMilestones: GameLevelData[];
  fuelDivRef: React.RefObject<HTMLDivElement>;
  progressDivRef: React.RefObject<HTMLDivElement>;
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  increaseMultiplier: () => void;
  decreaseMultiplier: () => void;
  setFuel: (state: any) => void;
  getLevelName: () => string;
  pointsMultiplier: number;
}

const CustomTapContext = createContext<CustomTapContextType | undefined>(
  undefined
);

//  Custom Hook to provide data for context user  //

const useValue = () => {
  const value = useContext(CustomTapContext);
  if (!value) {
    console.error("useTapContext must be used within TapProvider");
  }
  return value;
};

// ====================================================== //
// === Component to wrap the app for context providing == //
// ====================================================== //

const TapContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [fuel, setFuel] = useState(spaceMilestones[0].maxFuel); // initialize with DB data or first fuel base
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userIdParam = queryParams.get("userId") || "Demo_User";
  const [username, setUsername] = useState(userIdParam);

  const { data, loading, error } = useQuery(GET_PLAYER, {
    variables: { userId: username },
  });

  if (loading) {
    console.log("loading");
  }

  if (error) {
    console.log(error);
  }

  const [points, setPoints] = useState<number | null>(null);

  useEffect(() => {
    if (data) {
      setPoints(data.getPlayer.points);
      setUsername(data.getPlayer.userId); // Set the username from the response
    }
  }, [data]);

  useEffect(() => {
    setUsername(userIdParam);
  }, [userIdParam]);

  // Level Management
  const {
    levelIndex,
    background,
    getLevelName,
    pointsMultiplier,
    setPointsMultiplier,
    progressDivRef,
  } = useLevelManagement(fuel, points ?? 1, setPoints);
  // Fuel Management
  const { fuelDivRef, showFuelEmpty } = useFuelManagement(levelIndex, fuel);

  // Actions
  const { handleClick, increaseMultiplier, decreaseMultiplier, animation } =
    useTapActions({
      fuel,
      setFuel,
      points: points ?? 1,
      setPoints,
      pointsMultiplier,
      setPointsMultiplier,
      showFuelEmpty,
      levelIndex,
    });

  const [savePlayer] = useMutation(SAVE_PLAYER);

  // const [saveCount, setSaveCount] = useState<number>(0);
  // const increaseSaveCount = () => setSaveCount(saveCount + 1);
  // setInterval(() => {
  //   console.log(`tik tik ${saveCount}`);
  //   increaseSaveCount();
  // }, 2000);

  const pointsRef = useRef(points); // Create a ref to store points
  useEffect(() => {
    pointsRef.current = points; // Update the ref each time points changes

    const savePoints = async () => {
      if (username && pointsRef.current !== null && pointsRef.current > 0) {
        await savePlayer({
          variables: { userId: username, points: pointsRef.current },
        });
      }
    };

    savePoints(); // Save points every 2 seconds
  }, [points]);

  return (
    <CustomTapContext.Provider
      value={{
        fuel,
        points: points ?? 0,
        username,
        levelIndex,
        animation,
        background,
        spaceMilestones,
        fuelDivRef,
        progressDivRef,
        handleClick,
        increaseMultiplier,
        decreaseMultiplier,
        setFuel,
        getLevelName,
        pointsMultiplier,
      }}
    >
      {children}
    </CustomTapContext.Provider>
  );
};

export { useValue };

const ApoloComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <TapContextProvider>
        {/* App Components */}
        {children}
      </TapContextProvider>
    </ApolloProvider>
  );
};
// export default TapContextProvider;
export default ApoloComponent;

import plus from "../../assets/plus.png";
import substract from "../../assets/substract.png";
import { useValue } from "../../context/customTapContext";
const MultiplierBar = () => {
  const value = useValue();
  if (!value) {
    console.error("context error");
    return null;
  }

  const { pointsMultiplier, increaseMultiplier, decreaseMultiplier } = value;

  return (
    <div
      id="multiplierBar"
      className="flex w-80 gap-4 justify-center items-center mt-1"
    >
      <div
        onClick={increaseMultiplier}
        className="flex justify-center items-center w-8 h-8 bg-[#00AEEF] text-white font-bold text-xl rounded-lg shadow-lg border-b-4 border-blue-800 "
      >
        <img
          src={plus}
          alt="Add"
          className="w-4 h-4 drop-shadow-[2px_1px_2px_#000000]"
        />
      </div>
      <div className="flex justify-center items-center w-20 h-10 bg-[#00AEEF]  text-zinc-200 font-bold text-2xl rounded-lg shadow-lg border-b-4 border-blue-800  transition-all duration-200">
        <p className="drop-shadow-[2px_2px_2px_#000000]">x{pointsMultiplier}</p>
      </div>
      <div
        onClick={decreaseMultiplier}
        className="flex justify-center items-center w-8 h-8 bg-[#00AEEF] text-white font-bold text-xl rounded-lg shadow-lg border-b-4 border-blue-800 "
      >
        <img
          src={substract}
          alt="minus"
          className="w-4 h-4 drop-shadow-[2px_2px_2px_#000000]"
        />
      </div>
    </div>
  );
};

export default MultiplierBar;

// Hover code causing issues on mobile , hover:bg-[#53a5f7] hover:shadow-blue-500/50 transition-all duration-200

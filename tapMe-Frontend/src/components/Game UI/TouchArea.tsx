import rocket from "../../assets/rocketfinal.png";
import flame from "../../assets/flame.png";
import { useValue } from "../../context/customTapContext";
const TouchArea = () => {
  const value = useValue();
  if (!value) {
    console.error("context error");
    return null;
  }
  const { animation, handleClick } = value;
  return (
    <div className="">
      <img
        src={rocket}
        alt="Rocket"
        className={` absolute h-[53%] w-36 left-2/4 translate-x-[-50%] z-10 ${
          animation ? "jumping" : ""
        }`}
        onClick={handleClick}
      />
      {animation && (
        //<div className=" border border-yellow-400">
        <img
          src={flame}
          alt="Flame"
          className={` absolute bottom-[-20px] h-56 w-32 z-0 left-2/4 translate-x-[-50%] ${
            animation ? "jumping" : ""
          }`}
        />
        //</div>
      )}
    </div>
  );
};

export default TouchArea;

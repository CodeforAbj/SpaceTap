import SubHeader from "./SubHeader";
import Header from "./Header";

import Display_Container from "./Display_Container";

const MainComponent = () => {
  return (
    <>
      {" "}
      <div
        id="parentContainer"
        className="bg-black h-screen w-96 flex flex-col "
      >
        <Header />
        <SubHeader />
        <Display_Container />
      </div>
    </>
  );
};

export default MainComponent;

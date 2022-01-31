import AboutMe from "./Data/AboutMe";
import Education from "./Data/Education";
import "./RightSide.css"

const RightSide = () => {
  return <div className="rightSide">
      <AboutMe/>
      <Education/>
  </div>;
};

export default RightSide;

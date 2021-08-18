import React from "react";
import Ellipse from "../assets/svg/Ellipse.svg";
import Ellipse1 from "../assets/svg/Ellipse1.svg";
import ParallaxImage from "./ParallaxImage";

const DescriptionBox = ({ description }) => {
  return (
    <div className="static">
      <div className="text-white bg-neutral rounded-lg p-12 border-desc font-quicksand text-lg">
        {description}
      </div>
      <ParallaxImage />
    </div>
  );
};

export default DescriptionBox;

import React from "react";
import { Parallax } from "react-scroll-parallax";

import Ellipse from "../assets/svg/Ellipse1.svg";
import Ellipse1 from "../assets/svg/Ellipse1.svg";

const ParallaxImage = () => {
  return (
    <Parallax
      className="custom-class"
      y={[-60, 80]}
      x={[80, -20]}
      tagOuter="figure"
    >
      <img className="w-64" src={Ellipse} alt="img" />
    </Parallax>
  );
};

export default ParallaxImage;

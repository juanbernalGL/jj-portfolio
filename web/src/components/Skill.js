import React from "react";

const Skill = ({ label }) => {
  return (
    <div className="glow-on-hover h-14 font-quicksand font-normal text-xl flex flex-wrap content-center justify-center px-5 text-primary border-2 border-primary rounded-md">
      {label}
    </div>
  );
};

export default Skill;

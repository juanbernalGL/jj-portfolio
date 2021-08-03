import React from "react";

const DescriptionBox = ({ description }) => {
  return (
    <div className="text-white bg-neutral rounded-lg p-12 border-desc font-quicksand text-lg">
      {description}
    </div>
  );
};

export default DescriptionBox;

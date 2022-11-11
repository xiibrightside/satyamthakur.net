import React from "react";

const Rec = () => {
  return (
    <div className="welcome__wrapper w-full h-full flex flex-col" id="welcome">
      <div className="welcome__top w-full h-4/5 p-10">
        <h1 className="title-text mb-10">
          PER DOLOREM <br /> AD ASTRA
        </h1>
        <p className="para-text text-xl">❛ Through Pain To The Stars ❜</p>
      </div>
      <div className="welcome__bottom w-full h-1/5 flex flex-row justify-between items-end px-20">
        <div className="flex flex-row gap-5 items-center">
          <div className="sliver"></div>
          <p className="para-text text-white">SCROLL</p>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <p className="para-text text-white">LLORCS</p>
          <div className="sliver"></div>
        </div>
      </div>
    </div>
  );
};

export default Rec;

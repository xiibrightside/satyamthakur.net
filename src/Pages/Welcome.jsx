import React from "react";

const Rec = () => {
  return (
    <div className="welcome__wrapper w-full h-full flex flex-col" id="welcome">
      {/* <div className="para-text text-white w-full flex flex-col justify-center items-center">
        <p>X</p>
        <p>S</p>
        <p>T</p>
      </div> */}
      <div className="welcome__top w-full h-5/6 p-10">
        <h1 className="title-text mb-10">
          PER DOLOREM <br /> AD ASTRA
        </h1>
        <p className="para-text text-xl">❛ Through Pain To The Stars ❜</p>
      </div>
      <div className="welcome__bottom w-full h-1/6 flex flex-row justify-center items-end">
        <div className="flex flex-col gap-2 items-center">
          <a href="#who">
            <p className="para-text text-white">WHO</p>
          </a>
          <div className="sliver"></div>
        </div>
      </div>
    </div>
  );
};

export default Rec;

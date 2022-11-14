import React from "react";

const Rec2 = () => {
  return (
    <div
      className="who__wrapper w-full h-full flex flex-col justify-between gap-10"
      id="who"
    >
      <div className="who__top p-5 justify-between text-center">
        <h1 className="title-text mb-10">
          Hi. I'm Satyam. <br />A Front End Developer.
        </h1>
      </div>
      <div className="who__content flex flex-row justify-center items-center">
        <p className="para-text">
          I am a Self taught programmer, based in New Delhi, where I completed
          my Schooling and Bachelor's (IT) from GGSIPU (2022). Creating Web Apps
          that help make our lives easy and fun always interests me. If I'm not
          on my laptop coding away im probably playing video games or watching a
          movie !
        </p>
      </div>
      <div className="who__bottom flex items-end justify-center">
        <div className="flex flex-col gap-2 items-center">
          <a href="#skills">
            <p className="para-text text-white">SKILLS</p>
          </a>
          <div className="sliver"></div>
        </div>
      </div>
    </div>
  );
};

export default Rec2;

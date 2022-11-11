import React from "react";

const Rec2 = () => {
  return (
    <div
      className="who__wrapper w-full h-full flex flex-col justify-between gap-20"
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
      <div className="who__bottom flex justify-center items-end">
        <div className="sliver"></div>
      </div>
    </div>
  );
};

export default Rec2;

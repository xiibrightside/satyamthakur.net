import React from "react";

const Rec2 = () => {
  return (
    <div className="who__wrapper" id="who">
      <div className="who__top">
        <h1>
          Hi. I'm Satyam. <br />A Front End Developer.
        </h1>
        <p>
          I am a Self taught programmer, based in New Delhi, where I completed
          my Schooling and Bachelor's (IT) from GGSIPU (2022). Creating Web Apps
          that help make our lives easy and fun always interests me. If I'm not
          on my laptop coding away im probably playing video games or watching a
          movie.
        </p>
        <button className="resume-cta">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1zKnLzXoFhvHmYD2Y5_I12BJYE2yHKRXQ/view?usp=share_link"
          >
            RESUME
          </a>
        </button>
      </div>
      <div className="welcome__bottom">
        <a href="#skills">
          <p>SKILLS</p>
        </a>
        <div className="sliver"></div>
      </div>
    </div>
  );
};

export default Rec2;

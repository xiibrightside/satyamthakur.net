/* eslint-disable no-unused-vars */
import React from "react";
import { Binge, Shrink, Tic, Mask } from "./images";

const What = () => {
  const Data = [
    {
      id: "1",
      bg: Shrink,
      name: "ShrinkLink",
      description:
        "Turn your Links into a short Code. Share Links in a new way !!",
      link: "https://xiibrightside.github.io/URLToCODE/",
    },
    {
      id: "2",
      bg: Binge,
      name: "Binge Bucket",
      description:
        "A simple website to help you keep track of your TV binging neeeds",
      link: "https://xiibrightside.github.io/binge-bucket/",
    },
    {
      id: "3",
      bg: Mask,
      name: "MaskUP",
      description: "Mask Detection & Alert System (React jS / TensorflowJS",
      link: "https://maskup-5321c.web.app/",
    },
    {
      id: "4",
      bg: Tic,
      name: "Quick Tac Toe",
      description: "A simple Tic Tac Toe game built using React JS",
      link: "https://tictactoebynimrod.surge.sh/",
    },
  ];

  return (
    <div className="what__wrapper flex flex-col justify-between" id="work">
      <div className="what__top w-full text-white flex flex-row justify-center items-center">
        <h1 className="title-text">PROJECTS</h1>
      </div>
      <div className="what__content flex grid grid-cols-2 gap-16">
        {Data.map((details, index) => {
          return (
            <a
              key={details.id}
              rel="noreferrer"
              target="_blank"
              href={details.link}
              className="para-text"
            >
              <div className="flex flex-col justify-center items-center">
                <div className="what__cell flex flex-row">
                  <div
                    className="what__cell__left w-1/2 h-full"
                    style={{
                      backgroundImage: `url(${details.bg})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "left",
                    }}
                  ></div>
                  <div className="what__cell__right w-1/2 h-full flex flex-col justify-center gap-2 items-center p-5">
                    <p className="md-text">{details.name}</p>
                    <p className="para-text">{details.description}</p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="what__bottom w-full h-1/5 flex flex-row justify-center items-end px-20">
        <div className="flex flex-col gap-2 items-center">
          <a href="#contact">
            <p className="para-text text-white">CONTACT</p>
          </a>
          <div className="sliver"></div>
        </div>
      </div>
    </div>
  );
};

export default What;

/* eslint-disable no-unused-vars */
import React from "react";
import Data from "./work.json";

const What = () => {
  return (
    <div className="what__wrapper flex flex-col justify-between" id="work">
      <div className="what__top w-full text-white flex flex-row justify-center items-center">
        <h1 className="title-text">PROJECTS</h1>
      </div>
      <div className="what__bottom flex grid grid-cols-2 gap-10">
        {Data.map((details, index) => {
          return (
            <a
              rel="noreferrer"
              target="_blank"
              href={details.link}
              className="para-text"
            >
              <div
                className="flex flex-col justify-center items-center"
                key={index}
              >
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
                  <div className="what__cell__right w-1/2 h-full flex flex-col justify-between items-center p-5">
                    <p className="md-text">{details.name}</p>
                    <p className="para-text">{details.description}</p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="who__bottom flex justify-center items-end">
        <div className="sliver"></div>
      </div>
    </div>
  );
};

export default What;

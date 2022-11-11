/* eslint-disable no-unused-vars */
import React from "react";
import SkillList from "./docs.json";

const Skills = () => {
  return (
    <div className="skills__wrapper w-full h-full flex flex-col justify-center items-center">
      <div className="skills__top">
        <h1 className="title-text text-center">SKILLS</h1>
      </div>
      <div className="skills__content flex grid grid-cols-4 gap-10">
        {SkillList.map((details, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center"
              key={details.id}
            >
              <div className="skills__cell rounded-full">
                <img src={details.icon} alt={details.skill}></img>
              </div>
              <div className="flex flex-row gap-3">
                <p className="para-text">{details.skill}:</p>
                <p className="para-text">{details.proficiency}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full h-1/5 flex flex-row justify-between items-end px-20">
        <div className="flex flex-row gap-5 items-center">
          <div className="sliver"></div>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <div className="sliver"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

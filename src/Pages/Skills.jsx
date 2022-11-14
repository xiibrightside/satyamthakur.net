/* eslint-disable no-unused-vars */
import React from "react";
import { Html, Css, Git, JS, Node, Py, ReactJS, Tail, VS } from "./icons";

const Skills = () => {
  const SkillList = [
    {
      id: "1",
      skill: "HTML",
      icon: Html,
      proficiency: "Advanced",
    },
    {
      id: "2",
      skill: "CSS",
      icon: Css,
      proficiency: "Advanced",
    },
    {
      id: "3",
      skill: "JavaScript",
      icon: JS,
      proficiency: "Intermediate",
    },
    {
      id: "4",
      skill: "ReactJS",
      icon: ReactJS,
      proficiency: "Intermediate",
    },
    {
      id: "5",
      skill: "NodeJS",
      icon: Node,
      proficiency: "Elementary",
    },
    {
      id: "6",
      skill: "TailWind",
      icon: Tail,
      proficiency: "Advanced",
    },
    {
      id: "7",
      skill: "VS Code",
      icon: VS,
      proficiency: "Advanced",
    },
    {
      id: "8",
      skill: "GitHub",
      icon: Git,
      proficiency: "Intermediate",
    },
  ];

  return (
    <div
      id="skills"
      className="skills__wrapper w-full h-full flex flex-col justify-between items-center"
    >
      <div className="skills__top">
        <h1 className="title-text text-center">SKILLS</h1>
      </div>
      <div className="skills__content flex grid grid-cols-4 gap-10">
        {SkillList.map((details, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center"
              key={index}
            >
              <div className="skills__cell rounded-full">
                <img src={details.icon} alt={details.skill}></img>
              </div>
              <div className="skills__p flex flex-row gap-3">
                <p className="para-text">{details.skill}:</p>
                <p className="para-text">{details.proficiency}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="skills__bottom w-full h-1/5 flex flex-row justify-center items-end px-20">
        <div className="flex flex-col gap-2 items-center">
          <a href="#work">
            <p className="para-text">PROJECTS</p>
          </a>
          <div className="sliver"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

/* eslint-disable no-unused-vars */
import React from "react";
import { Html, Css, Git, JS, Node, ReactJS, Tail, VS } from "./icons";

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
    <div id="skills" className="skills__wrapper">
      <div className="skills__top">
        <h1>SKILLS</h1>
        <div className="cells">
          {SkillList.map((details, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center"
                key={index}
              >
                <div className="skills__cell rounded-full">
                  <img src={details.icon} alt={details.skill}></img>
                </div>
                <div>
                  <p className="para-text">
                    [{details.skill} : {details.proficiency}]
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="welcome__bottom">
        <a href="#work">
          <p>PROJECTS</p>
        </a>
        <div className="sliver"></div>
      </div>
    </div>
  );
};

export default Skills;

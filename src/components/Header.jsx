/* eslint-disable no-unused-vars */
import React from "react";
import Profile from "../assets/temppfp1.png";
// TODO: Swap pfp for ur image

const header = () => {
  return (
    <div className="header__wrapper fixed top-0 right-0 flex flex-row justify-between items-center">
      <div className="h-full w-4/5 flex flex-row justify-start items-center">
        <div className="h-full w-1/5 flex justify-center items-center">
          <div className="header__image h-24 w-24 rounded-full truncate">
            <a href="#welcome" alt="welcome">
              <img src={Profile} alt="profile-pic"></img>
            </a>
          </div>
        </div>
        <nav className="h-full w-1/5 flex items-center justify-start">
          <ul className="header__navbar">
            <li className="flex flex-row gap-2 items-center">
              <button>
                <a href="#who" alt="who">
                  WHO
                </a>
              </button>
            </li>
            <li className="flex flex-row gap-5 items-center">
              <a href="#work" alt="work">
                WHAT
              </a>
            </li>
            <li className="flex flex-row gap-5 items-center">
              <a href="#contact" alt="contact">
                WHERE
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="h-full w-1/5  flex flex-row justify-center items-center">
        <button className="header__resume-cta flex p-5 justify-center items-center rounded-lg">
          RESUME
        </button>
      </div>
    </div>
  );
};

export default header;

import React from "react";

const Socials = () => {
  // const handleClick = () => {
  //   window.location.href = `mailto:thakursatyam48@gmail.com`;
  // };
  return (
    <div className="sidebar__wrapper">
      {/* <div className="sidebar-top">
        <ul className="sidebar-nav">
          <li>
            <button>
              <a href="#who" alt="who">
                WHO
              </a>
            </button>
          </li>
          <li>
            <a href="#work" alt="work">
              WHAT
            </a>
          </li>
          <li>
            <a href="#contact" alt="contact">
              WHERE
            </a>
          </li>
        </ul>
      </div> */}
      <div className="sidebar-bottom">
        <div className="social-icons__wrapper">
          <a
            href="https://twitter.com/badhackerdotnet"
            rel="noreferrer"
            target="_blank"
            alt="twitter"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="social-icons__wrapper">
          <a
            href="https://www.linkedin.com/in/satyam-thakur-7a5460212/"
            rel="noreferrer"
            target="_blank"
            alt="linkdIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="social-icons__wrapper">
          <a
            href="https://www.instagram.com/xiibrightside/"
            rel="noreferrer"
            target="_blank"
            alt="instagram"
          >
            <i className="fa-solid fa-hashtag"></i>
          </a>
        </div>
        <div className="social-icons__wrapper">
          <a
            href="https://github.com/xiibrightside"
            rel="noreferrer"
            target="_blank"
            alt="github"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;

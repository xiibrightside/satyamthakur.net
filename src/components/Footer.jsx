import React from "react";

const Footer = () => {
  return (
    <div className="footer flex justify-center items-center text-black-700">
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
  );
};

export default Footer;

import React from "react";

const Socials = () => {
  const handleClick = () => {
    window.location.href = `mailto:thakursatyam48@gmail.com`;
  };
  return (
    <div className="socials__wrapper h-screen fixed left-0 top-0 bottom-0 flex flex-col gap-8 justify-center items-center">
      <a
        href="https://twitter.com/badhackerdotnet"
        rel="noreferrer"
        target="_blank"
        alt="twitter"
      >
        <i className="fa-xl fa-brands fa-twitter"></i>
      </a>
      <a
        href="https://www.instagram.com/xiibrightside/"
        rel="noreferrer"
        target="_blank"
        alt="instagram"
      >
        <i className="fa-xl fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://github.com/xiibrightside"
        rel="noreferrer"
        target="_blank"
        alt="github"
      >
        <i className="fa-xl fa-brands fa-github"></i>
      </a>
      <button onClick={handleClick} className="para-text">
        <i className="fa-xl fa-sharp fa-solid fa-g"></i>
      </button>
      <a
        href="https://www.linkedin.com/in/satyam-thakur-7a5460212/"
        rel="noreferrer"
        target="_blank"
        alt="linkdIn"
      >
        <i className="fa-xl fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default Socials;

import React from "react";

const Footer = () => {
  const handleClick = () => {
    window.location.href = `mailto:thakursatyam48@gmail.com`;
  };
  return (
    <div className="footer__wrapper fixed bottom-0 right-0 flex justify-between items-center px-10">
      <div>
        <p className="para-text">© 2022 Portfolio @ Satyam Thakur</p>
      </div>
      <div className="footer__info flex flex-row gap-5">
        <div className="flex flex-row gap-3 justify-center items-center">
          <i className="fa-solid fa-phone"></i>
          <p className="para-text">9911399663</p>
        </div>
        <div className="flex flex-row gap-3  justify-center items-center">
          <i className="fa-solid fa-paper-plane"></i>
          <button onClick={handleClick} className="para-text">
            thakursatyam48@gmail.com
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

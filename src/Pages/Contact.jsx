import React from "react";
// window.location.href = `mailto:(my email)?subject=${formdata.subject}&body=hi im ${formdata.name} . &{formdata.message} (${formdata.email})

const Page4 = () => {
  const handleClick = () => {
    window.location.href = `mailto:thakursatyam48@gmail.com`;
  };
  return (
    <div
      className="contact__wrapper flex flex-col justify-start items-start gap-10 p-10"
      id="contact"
    >
      <h1 className="title-text">
        I'M ALWAYS INTERESTED IN LEARNING NEW STUFF
      </h1>
      <p className="para-text text-center text-white">
        Are you minding a Project ? Let's Talk .
      </p>
      <button
        onClick={handleClick}
        className="header__resume-cta flex p-5 justify-center items-center rounded-lg"
      >
        CONTACT ME
      </button>
    </div>
  );
};

export default Page4;

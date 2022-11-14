import React from "react";
import { Page1, Page2, Page4, Page5 } from "../Pages";
import Page3 from "../Pages/Skills";

const Recap = () => {
  return (
    <div className="maincontent__wrapper">
      <section>
        <Page1 />
      </section>
      <section>
        <Page2 />
      </section>
      <section>
        <Page3 />
      </section>
      <section>
        <Page4 />
      </section>
      <section>
        <Page5 />
      </section>
    </div>
  );
};

export default Recap;

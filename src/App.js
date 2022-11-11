/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import { Footer, Header, Socials, Recap } from "./components";

const App = () => {
  const [mode, setMode] = useState(false);
  // TODO: fix light mode

  return (
    <main className="app__wrapper-night flex flex-row">
      <Socials />
      <div className="mainpage">
        <Header />
        <Recap />
        <Footer />
      </div>
    </main>
  );
};

export default App;

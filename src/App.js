/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import { Sidebar, Main, Foot } from "./components";
import UnderConstruction from "./Pages/UnderConstruction";

const App = () => {
  const [mode, setMode] = useState(false);
  // TODO: fix light mode

  return (
    <main className="app__wrapper flex flex-row">
      <Sidebar />
      {/*  <div className="mainpage flex flex-col">
        <Main />
        
      </div> */}
      <UnderConstruction />
      <Foot />
    </main>
  );
};

export default App;

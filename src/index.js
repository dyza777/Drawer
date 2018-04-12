import React from "react";
import { render } from "react-dom";
import MainContent from "./MainContent/MainContent";

const App = () => (
  <div className="container">
    <MainContent />
  </div>
);

render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter"

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote-react</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <div style={{borderStyle: "dashed"}}>
      <Counter/>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

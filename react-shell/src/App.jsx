import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import Counter from "remote_react/Counter";

import wrapper from "remote_solid/wrapper"

import "./index.scss";

const App = () => {
  const divRef = useRef(null)

  useEffect(() => {
    wrapper(divRef.current)
  }, [])

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: react-shell</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <div ref={divRef}></div>
    <Counter/>
  </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));

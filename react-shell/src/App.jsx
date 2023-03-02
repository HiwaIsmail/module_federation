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
      <div style={{backgroundColor: "green"}}>Name: react-shell</div>
      
      <div class="apps-wrapper">
        <div style={{borderStyle: "dashed", margin: "100px"}} ref={divRef}></div>
        <div style={{border: "solid black 2px"}}>
          <Counter/>
        </div>
      </div>
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));

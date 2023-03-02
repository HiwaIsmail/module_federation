import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import Counter from "remote_react/Counter";

import wrapper from "remote_solid/wrapper";

import "./index.scss";

const App = () => {
    const divRef = useRef(null);

    useEffect(() => {
        wrapper(divRef.current);
    }, []);

    return (
        <div>
            <div className="top-app-bar">
                <span className="material-symbols-outlined top-app-bar-icon">
                    menu
                </span>
                <div className="top-app-bar-title">React Shell</div>
            </div>

            <div className="apps-wrapper mt-10 text-3xl mx-auto max-w-6xl">
                <div className="remote-solid-wrapper" ref={divRef}></div>
                <div className="remote-solid-wrapper">
                    <Counter/>
                </div>
            </div>
        </div>
    );
};
ReactDOM.render(<App/>, document.getElementById("app"));

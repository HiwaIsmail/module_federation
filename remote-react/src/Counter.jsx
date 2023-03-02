import React, { useState } from "react";
import ReactImg from "./assets/React.png";
import "./counter.scss";
// Importing app.css is css file to add styling
// import "./App.css";

const Counter = () => {
// Counter is a state initialized to 0
    const [counter, setCounter] = useState(0);

// Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1);
    };

// Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        setCounter(counter - 1);
    };

    return (
        <div>
            <div className="dashbord dashbord-orange">
                <div className="icon-section">
                    <div className="icon-wrapper">
                        <img src={ReactImg}/>
                    </div>
                    <br/>
                    <small>React</small>
                    <p>{counter}</p>
                </div>
            </div>
            <div className="buttons">
                <button style={{
                    fontSize: "60%",
                    marginRight: "5px",
                    backgroundColor: "green",
                    borderRadius: "8%",
                    color: "white",
                }}
                        onClick={handleClick1}>Increment
                </button>
                <button style={{
                    fontSize: "60%",
                    marginLeft: "5px",
                    backgroundColor: "red",
                    borderRadius: "8%",
                    color: "white",
                }}
                        onClick={handleClick2}>Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;

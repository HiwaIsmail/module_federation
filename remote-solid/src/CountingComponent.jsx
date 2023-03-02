import { createSignal, onCleanup } from "solid-js";
import "./counting.scss";
import SolidImg from "./assets/Solid.png";

export default () => {
    const [count, setCount] = createSignal(0);
    const interval = setInterval(
        () => setCount(c => c + 1),
        1000,
    );
    onCleanup(() => clearInterval(interval));

    return (
        <div className="dashbord dashbord-green">
            <div className="icon-section">
                <div className="icon-wrapper">
                    <img src={SolidImg}/>
                </div>
                <br/>
                <small>SolidJS</small>
                <p>{count()}</p>
            </div>
        </div>
    );
};

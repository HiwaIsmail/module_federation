import { render } from "solid-js/web";

import CountingComponent from "./CountingComponent";

import "./index.scss";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote-solid</div>
    <div>Framework: solid-js</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <CountingComponent/>
  </div>
);
render(App, document.getElementById("app"));

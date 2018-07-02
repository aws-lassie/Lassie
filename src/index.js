import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./nav-bar.js";
import Recents from "./recents.js";
import Stats from "./stats.js";
import BestWorstFuncs from "./best-worst-funcs.js";
import styles from "./styles.css";
import Invocations from "./invocations.js";
import Durations from "./durations.js";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div class="top" >
            <div class="titleDiv">
              <h2 class="title">Lassie</h2>
            </div>
              < Stats /> 
        </div>
        <div class="left">
          < NavBar />
        </div>
        <div class="main">
          < Recents />
          < BestWorstFuncs />
          < Invocations />
          < Durations />
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("index"));

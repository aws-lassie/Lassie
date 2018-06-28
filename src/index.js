import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./nav-bar.js";
import Recents from "./recents.js";
import Stats from "./stats.js";
import styles from "./styles.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div class="top" >
            <h2 class="title" >Lassie</h2>  
        </div>
        <div class="left">
          < NavBar />
        </div>
        <div class="main">
          < Stats />
          < Recents />
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("index"));

import React, { Component } from 'react';
import styles from './styles.css';
import NavBar from "./nav-bar.js";
import Recents from "./recents.js";
import Stats from "./stats.js";
import Invocations from "./invocations.js";
import Durations from "./durations.js";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // console.log('dashboard props: ', this.props);
    return (
      <div>
        <div class="top" >
            <div class="titleDiv">
              <h2 class="title">Lassie </h2>
            </div>
              < Stats averages={this.props.averages} /> 
        </div>
        <div class="left">
          < NavBar />
        </div>
        <div class="main">
          < Recents functions={this.props.functions}/>
          < Invocations />
          < Durations />
        </div>
      </div>
    )
  }
};

export default Dashboard;
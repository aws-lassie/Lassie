import React, { Component } from 'react';
import dashboardStyles from './dashboard.css';
import Stats from './../dashboard-stats/dashboard-stats.js';
import Recents from './../dashboard-recents/dashboard-recents.js';
import Invocations from "./../dashboard-invocations/dashboard-invocations.js";
import Durations from "./../dashboard-durations/dashboard-durations.js";
// import Logo from "./../assets/lassie_logo.png";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // console.log('dashboard props: ', this.props);
    return (
      <div>
        <div class="main">
          <div class="whiteSpace">
          <div class="top">
              <div class="name">
                Lassie
              </div>
              <div class="dropdown">
                <button class="dropbtn">My Lambda Functions</button>
                <div class="dropdown-content">
                  {/* <a href="#">Function 1</a>
                  <a href="#">Function 2</a>
                  <a href="#">Function 3</a> */}
                </div>
            </div>  
          </div>
          </div>
          < Stats averages={this.props.averages} />
          <div class="flexBox">
            < Invocations />
            < Durations />
          </div>
          < Recents functions={this.props.functions}/>  
        </div>
      </div>  
    )
  }
};

export default Dashboard;
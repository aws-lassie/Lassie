import React, { Component } from 'react';
import statsStyles from "./dashboard-stats.css";
// import styles from './styles.css';

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('stats props: ', this.props.averages.billingWastagePerInvoc);
    return (
      <div class="stats-container">
        <div class="stats">
          Avg Percentage of Billing Wastage Per Invocation
          <div class="number"> {this.props.averages.billingWastagePerInvoc}% </div>
        </div>  
        <div class="stats">
          Avg Percentage of Memory Wastage Per Invocation
          <div class="number"> {this.props.averages.memoryWastagePerInvoc}% </div>
        </div>
        <div class="stats">  
          Avg Percentage of Cold Starts Per Function
          <div class="number"> {this.props.averages.coldStartsPerFunc}% </div>
        </div>  
      </div>
    )
  }
}

export default Stats;
import React, { Component } from 'react';
import styles from './styles.css';

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('stats props: ', this.props.averages.billingWastagePerInvoc);
    return (
      <div class="remainingTop">
        <div class="stats">
          Avg Percentage of Billing Wastage Per Invocation
          <div class="wastage"> {this.props.averages.billingWastagePerInvoc}% </div>
        </div>  
        <div class="stats">
          Avg Percentage of Memory Wastage Per Invocation
          <div class="memory"> {this.props.averages.memoryWastagePerInvoc}% </div>
        </div>
        <div class="stats">  
          Avg Percentage of Cold Starts Per Function
          <div class="cold"> {this.props.averages.coldStartsPerFunc}% </div>
        </div>  
      </div>  
    )
  }
}

export default Stats;
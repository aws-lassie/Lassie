import React, { Component } from 'react';
import styles from './styles.css';

class Stats extends React.Component {
  render() {
    return (
      <div class="remainingTop">
        <div class="stats">
          Avg Wastage
          <div class="wastage"> 80% </div>
        </div>  
        <div class="stats">
          Avg CPU % of Memory
          <div class="memory"> 20% </div>
        </div>
        <div class="stats">  
          Avg number of cold starts
          <div class="cold"> 14 </div>
        </div>  
      </div>  
    )
  }
}

export default Stats;
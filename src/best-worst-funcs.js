import React, { Component } from 'react';
import styles from './styles.css';

class BestWorstFuncs extends React.Component {
  render() {
    return (
      <div class="bestWorst">
        <div class="best">
          <h5>Best Performing</h5>
        </div>
        <div class="worst">
          <h5>Worst Performing</h5>
        </div>
      </div>
    )
  }
}

export default BestWorstFuncs;

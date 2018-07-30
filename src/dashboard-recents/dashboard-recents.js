import React, { Component } from 'react';
import styles from './dashboard-recents.css';

class Recents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let listItems = [];
    this.props.functions.forEach((list) => {
      list.forEach((invoc) => {
        listItems.push(<li> {invoc["FuncName"] + ' Invocation Duration: ' + invoc["InvocationDur"] + ' Cold Start: ' + invoc["ColdStart"]} </li>);
      })
    });

    let display = listItems.slice(0, 5);

    return (
      <div class="flex">
        <div class="recents">
          <h5 class="recentsSectionTitle">Recents</h5>
          <ul class="functions">
            {display}
          </ul>  
        </div>
      </div>
    );
  }
}

export default Recents;
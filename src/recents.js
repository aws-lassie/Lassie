import React, { Component } from 'react';
import styles from './styles.css';

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

    let display = listItems.slice(0, 3);

    return (
      <div class="recents">
        <h5 class="sectionTitle">Recents</h5>
        <ul>
          {display}
        </ul>  
      </div>
    );
  }
}

export default Recents;
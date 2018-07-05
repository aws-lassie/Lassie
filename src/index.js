import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./nav-bar.js";
import Recents from "./recents.js";
import Stats from "./stats.js";
import BestWorstFuncs from "./best-worst-funcs.js";
import styles from "./styles.css";
import Invocations from "./invocations.js";
import Durations from "./durations.js";
import AWS from "aws-sdk";

let getCredsAndScan = (() => {
  let executed = false;
  return function() {
    if (!executed) {
      executed = true;
      // fetch request for creds from credentials file
      fetch('/creds')
        .then (res => {
          if (res.ok) {
            return res.json();
          } else {
            console.log('Error in response');
          }
        })
        .then(res => {
            AWS.config.update({
              credentials: {
                accessKeyId: res.accessKeyId,
                secretAccessKey: res.secretAccessKey                 
              },
              region: res.region
            })

            let docClient = new AWS.DynamoDB.DocumentClient();

            let params = {
              TableName: 'LassieLogs'
            };

            docClient.scan(params, (err, data) => {
              if(err) {
                console.log('Error reading from db', err);
              } else {
                console.log('Success ', data);
              }
            });
        })
        .catch((err) => console.log('Error ', err));
    }
  };
})();

getCredsAndScan();

// another fetch request here to refresh the data 


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

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


console.log('pre config command: ', AWS.config);

let getCreds = (() => {
  let executed = false;
  return function() {
    if (!executed) {
      executed = true;
      // fetch request for creds from credentials file
      fetch('https://localhost3000/creds')
        .then(res => {
          if(res.ok) {
            //return res;
            AWS.config.update({
              credentials: {
                accessKeyId: res.body.accessKeyId,
                // in the file it's aws_access_key_id
                secretAccessKey: res.body.secretAccessKey 
                // in the file it's aws_secret_access_key                
              },
              region: res.body.region
            })
          } else {
            throw Error(`Error status ${res.status}`);
          }
        })
        .catch(console.log(`Error: ${res.statusText}`));
    }
  };
});

getCreds(); 

AWS.config.update({
  credentials: {
    accessKeyId: "AKIAIVMFGZGKFWPQUH7Q",
    secretAccessKey: "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"
   },
  region: 'us-east-2'
});

console.log('post config command: ', AWS.config);
// this is horrible practice! We need a way to update the SDK config when the user updates the CLI
// 1 option is to do it with the command itself
// another option is to import the creds from a pre-configured AWS Cognito User Pool 
// can't run the file using loadFromPath because this isn't node, it's the frontend. Same for ShareIniFileCreds



// var credentials = new AWS.SharedIniFileCredentials({profile: 'adminuser2'});
// console.log('credentials: ', credentials);

// console.log('SDK creds: ', AWS.config.credentials);
// console.log('CLI creds: ', AWS.config.loadFromPath('~/.aws/config'));
// console.log('post config command: ', AWS.config);
// AWS.config.credentials = credentials;

let docClient = new AWS.DynamoDB.DocumentClient();

let params = {
  TableName: 'LassieLogs',
  Key: {'Id': 7}
  // should think through the initial request for all info and all subsequent requests
};

docClient.get(params, (err, data) => {
  if(err) {
    console.log('Error reading from db', err);
  } else {
    console.log('Success ', data);
  }
});

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

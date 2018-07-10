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
import Dashboard from "./dashboard.js";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';


const readData = (data) => {
  let length = data["Items"]["length"];
  let funcName;
  let funcList = [];
  let funcTotal = 0;

  let billedDur;
  let differenceBillDurAndDur;
  let sumOfDiffBillDurAndDur = 0;
  let sumBillingWastage = 0;

  let coldStartStorage = {};

  let funcs = {};
  let date;

  let memoryUsed;
  let memoryAllocated;
  let differenceMemory;
  let sumMemoryWastage = 0;

  let recents = data["Items"].sort(function(a,b) {
    return new Date(b.Date) - new Date(a.Date); 
  });

  data["Items"].forEach((invoc) => {

    for (let metric in invoc) {
      if (metric === 'BilledDur') {
        billedDur = invoc[metric];
        differenceBillDurAndDur = 0;
        differenceBillDurAndDur += billedDur;
        // console.log('billing dur', differenceBillDurAndDur);
      } else if (metric === 'InvocationDur') {
        differenceBillDurAndDur -= invoc[metric];
        sumOfDiffBillDurAndDur += differenceBillDurAndDur;
        // console.log('difference: ', differenceBillDurAndDur);
      } else if (metric === 'FuncName') {
        funcName = invoc[metric];
        funcList.push(funcName);

        if(!funcs.hasOwnProperty(funcName)) {
          funcs[funcName] = {
            invocations: [invoc]
          };
        } else {
          funcs[funcName]["invocations"].push(invoc);
        }

        if(!coldStartStorage.hasOwnProperty(funcName)) {
          coldStartStorage[funcName] = { cold: 0, all: 0, percentCold: 0};
          funcTotal++;
        }
      } else if (metric === 'ColdStart') {

        if (invoc[metric]) {
          coldStartStorage[funcName]["cold"]++;
          coldStartStorage[funcName]["all"]++; 
        } else {
          coldStartStorage[funcName]["all"]++;
        }
        
        coldStartStorage[funcName]["percentCold"] = (coldStartStorage[funcName]["cold"] / coldStartStorage[funcName]["all"]) * 100;
        // console.log('cold starts vs all invocations by func: ', coldStartStorage);
      } else if (metric === 'MemoryUsed') {
        memoryUsed = invoc[metric];
      } else if (metric === 'MemoryAllocated') {
        memoryAllocated = invoc[metric];
        differenceMemory = 0;
        differenceMemory += memoryAllocated;
        differenceMemory -= memoryUsed;
        // console.log('should be wasted memory: ', differenceMemory);
      }
    }

    let billingWastagePerFunc = (differenceBillDurAndDur / billedDur) * 100;
    sumBillingWastage += billingWastagePerFunc;
    // console.log('% billing wastage per func: ', billingWastagePerFunc);

    let memoryWastagePerInvoc = (differenceMemory / memoryAllocated) * 100;
    sumMemoryWastage += memoryWastagePerInvoc;
    // console.log('% memory Wastage per invoc: ', memoryWastagePerInvoc);
  });
  let avgBillingWastage = Math.round(sumBillingWastage / length);
  // console.log('avg percent billing wastage per invoc: ', avgBillingWastage + '%');

  let sumColdStartsPercent = 0;
  for (let func in coldStartStorage) {
    sumColdStartsPercent += coldStartStorage[func]["percentCold"];
  }

  let avgColdStartsPercent = Math.round(sumColdStartsPercent / funcTotal);
  // console.log('Avg % cold starts per func: ', avgColdStartsPercent + '%');

  let avgMemoryWastagePerInvoc = Math.round(sumMemoryWastage / length);
  // console.log('Avg memory wastage per invoc: ', avgMemoryWastagePerInvoc + '%');

  return {
    lambdaFunctions: [recents],
    averages: {
      billingWastagePerInvoc: avgBillingWastage,
      memoryWastagePerInvoc: avgMemoryWastagePerInvoc,
      coldStartsPerFunc: avgColdStartsPercent
    }
  }
}  

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lambdaFunctions: [],
      averages: {
        billingWastagePerInvoc: 0,
        memoryWastagePerInvoc: 0,
        coldStartsPerFunc: 0
      }
    };
  }

  componentDidMount() {
    // setTimeout(() => {
      docClient.scan(params, (err, data) => {
        if(err) {
          console.log('Error reading from db', err);
        } else {
          this.setState(readData(data));        
        }
      });
    // }, 1000);
  }


  render() {
    console.log('this.state before render: ', this.state);
    return (
      <Router >
        <div>
        <Route exact path="/" render={() => <Dashboard functions={ this.state.lambdaFunctions } averages= { this.state.averages }/>}/>
        </div>
      </Router >
    )
  }
};

let docClient;
let params; 

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

    docClient = new AWS.DynamoDB.DocumentClient();

    params = {
      TableName: 'LassieLogs'
    };

    ReactDOM.render(<App />, document.getElementById("index"));

  })

.catch((err) => console.log('Error ', err));


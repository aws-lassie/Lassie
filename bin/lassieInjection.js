const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB();

let coldStart = true;
let lambStartTime = process.hrtime();

const wrapper = (func) => {
  return (event, context, callback) => {
    const curDate = new Date(Date.now()).toString();
    if (!coldStart) lambStartTime = context.getRemainingTimeInMillis();

    Promise.resolve(func(event, context, callback)).then(() => {
      logMetrics(context, curDate, coldStart, lambStartTime);
      coldStart = false;
    });
  };
};

const logMetrics = (context, curDate, coldStartInp, lambStartTimeInp) => {
  const cpuTime = process.cpuUsage();
  const cpuUse = cpuTime.user / (cpuTime.user + cpuTime.system);
  const mem = process.memoryUsage();
  const memUsed = convertBytesToMebibyte(mem.rss);
  const duration = coldStartInp
    ? calcDurFromTuple(process.hrtime(lambStartTimeInp))
    : lambStartTimeInp - context.getRemainingTimeInMillis();

  saveInfo(createDbObj(context, curDate, duration, memUsed, cpuUse, coldStartInp));
};

const createDbObj = (context, curDate, duration, memUsed, cpuUse, coldStartInp) => {
  return {
    TableName: 'LassieLogs',
    Item: {
      createdAt:      { S: curDate },
      funcName:       { S: context.functionName },
      configMem:      { N: context.memoryLimitInMB },
      funcVer:        { S: context.functionVersion },
      invokeId:       { S: context.invokeid },
      awsRequestId:   { S: context.awsRequestId },
      invokedFuncArn: { S: context.invokedFunctionArn },
      awsRegion:      { S: process.env.AWS_REGION },
      execDur:        { N: duration.toString() },
      billedDur:      { N: calcBilledDuration(duration).toString() },
      memUsed:        { N: memUsed.toString() },
      cpuUse:         { N: cpuUse.toString() },
      coldStart:      { BOOL: coldStartInp }
    }
  };
};

const saveInfo = (params) => {
  // Call DynamoDB to add the item to the table
  ddb.putItem(params, (err, data) => {
    if (err) console.log('Error in saving logs', err);
  });
};

const convertBytesToMebibyte = val => val / 1024 / 1024;
const calcBilledDuration = val => Math.ceil(val / 100) * 100;
const calcDurFromTuple = tuple => (tuple[0] * 1e3) + (tuple[1] * 1e-6);

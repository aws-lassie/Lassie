process.env.AWS_SDK_LOAD_CONFIG = true;

const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

const app = express();

app.use(express.static(path.join(__dirname, './../dist')));

app.get('/creds', (req, res) => {
  const sharedCreds = new AWS.SharedIniFileCredentials({ profile: 'default' });
  console.log('shared creds: ', sharedCreds);
  console.log('aws config region', AWS.config.region);
  res.setHeader('Content-Type', 'application/json');
  console.log('shared Creds Access key', sharedCreds.secretAccessKey);
  if (sharedCreds.secretAccessKey === undefined || 
    sharedCreds.accessKeyId === undefined ||
    AWS.config.region === undefined) {
    console.log('Error! Go back and set up the CLI properly');
    res.send({ error: 'Error! Go back and set up the CLI properly' });
  } else {
    res.status(200).send(JSON.stringify({
      secretAccessKey: sharedCreds.secretAccessKey,
      accessKeyId: sharedCreds.accessKeyId,
      region: AWS.config.region
    }));
  }
});

app.listen(3000, (err, response) => {
  if (err) console.log('Error, server not started');
  console.log('Listening to port 3000');
});

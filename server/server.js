const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname + './../dist')));

app.listen(3000, (err, response) => {
  console.log('Listening to port 3000');
});
var createError = require('http-errors');

var express = require('express');
app = express();

app.get('/', function (req, res) {
  let hostName = process.env.HOSTNAME.split('-');
  let appName = hostName[0] + '-' + hostName[1];
  res.send('Hello World from pod: ' + appName + '\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});


var express = require('express');
const mongodb = require('./db/connect');
const bodyParser = require('body-parser');
var app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
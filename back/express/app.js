const express= require('express');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const path=require('path');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, '../public')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });
/* const port=process.env.PORT || 5000;
app.listen(port, function() {
    console.log(`Express server listening on port ${port}`);
}); */
module.exports = app;
module.exports.handler = serverless(app);
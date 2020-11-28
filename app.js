// https://siliconevalleyapi.herokuapp.com/ 

const express = require('express');

const app = express();

const fs = require('fs');

const quotes = require('./quotes.json')

app.get('/', function(req, res) {
    quoteToReturn = Math.floor(Math.random() * quotes.length)
    res.send(quotes[quoteToReturn])
});


let port = process.env.PORT

if (port == null || port == "") {
    port = 3000;
  }
  app.listen(port, function() {
    console.log('Server started on port 3000')
});
var express = require('express');
var app = express();
const port = 8081
var fs = require("fs");

app.get('/cars', function (req, res) {
   fs.readFile( __dirname + "/" + "cars.json", 'utf8', function (err, data) {
      res.end( data );
   });
})

app.get('/cars/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "cars.json", 'utf8', function (err, data) {
      var cars = JSON.parse( data );
      var car = cars[req.params.id] 
      res.end( JSON.stringify(car));
   });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
/*
var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.send('<h1>TitanNotes!</h1>');
});
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
*/

var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + "/views/";

app.use("/",router);

router.get("/",function(req, res){
  res.sendFile(path + "index.html");
});

router.get("/product",function(req, res){
  res.sendFile(path + "product.html");});

router.get("/about",function(req, res){
  res.sendFile(path + "about.html");
});

app.use("*",function(req, res){
  res.send("Error 404: Not Found!");
});

app.listen(3000,function(){
  console.log("Server running at Port 3000");
});

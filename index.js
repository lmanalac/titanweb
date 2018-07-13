
var express = require('express');
var app = express();
var http = require('http');
var https = require('https');
var fs = require('fs');


app.use(express.static("public"));
app.get('/', function (req, res) {
  res.sendFile('./index.html', {root: __dirname })
//res.send('<h1>TitanNotes!</h1>');
});
/*
var privateKey = fs.readFileSync( 'key.pem' );
var certificate = fs.readFileSync( 'cert.pem' );
var passphrase = "none";

var https_options = {
    key: privateKey,
    cert: certificate,
    passphrase:passphrase

};
var PORT = 8000;
var HOST = 'localhost';
//app = express();

server = https.createServer(https_options, app).listen(PORT, HOST);
console.log('HTTPS Server listening on %s:%s', HOST, PORT);


https.createServer({
    key: privateKey,
    cert: certificate,
    passphrase:'none'
}, app).listen(3000,function(){
  console.log('Listening on port SSL 3000!');
});
*/

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});

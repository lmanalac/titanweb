
var express = require('express');
var app = express();
app.use(express.static("public"));
app.get('/', function (req, res) {
  res.sendFile('./index.html', {root: __dirname })
//res.send('<h1>TitanNotes!</h1>');
});
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});

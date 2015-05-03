
'use strict';

var express = require('express');
//`require` says go get whatever from package.json. This immediately invokes the express method.
var app = express(); // Express is the middleware

// The following below: informs the server that everything will be available in the root:public
app.use(express.static(__dirname + '/public'));

app.get('/about', function(req, res) {//translates to the URL localhost/3000/greet
  //req is request and res is response
  res.status(200).sendFile(__dirname + '/public/about.html');
  //only call ONE .send
});

app.get('/secret', function(req, res) {//translates to the URL localhost/3000/greet
  //req is request and res is response
  res.status(200).send('Your mother was a hamster; and as for your father: Elderberries!');
  //only call ONE .send
});

app.get('/*', function(req, res) {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(process.env.PORT || 5000, function(){ //environmental variable process.env pulls the port from the command line, if it doesn't exist it will go to 3000.  in the command line we can now say "PORT=5000 node server" and the server will pick up on the change.  SWEET

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
//listening on port 3000
var sys = require("sys");
sys.puts("Reticulating splines..");

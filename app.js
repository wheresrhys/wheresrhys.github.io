var express = require('express');
var app = express();
var oneDay = 86400000;

app.use(express.compress());

app.use(express.static(__dirname + '/build/', { maxAge: oneDay }));

var port = process.env.PORT || 8000;
app.listen(port, function(){
    console.log('listening on', port);
});
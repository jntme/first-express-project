var express = require('express');
var logger = require('morgan');

var dbConnection = require('./dbConnection');
var router = require('./router');

var app = express();
app.use(express.static('public'));

app.use('/', router)
app.use(logger('dev'));

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
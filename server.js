'use strict';
// get all the tools we need
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index.js');
var cors = require('cors')
var port = process.env.PORT || 3000;
var app = express();

// setup our express application
app.use(express.static('public'));
app.set('view engine', 'ejs');



// use cors middleware
app.use(cookieParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: true
}));

app.use(cors({
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    credentials: true,
    maxAge: 3600
}));

// setup routes
routes(app);

// start our server
app.listen(port, function() {
    console.log('Server listening on port ' + port + '...');
});
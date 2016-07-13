'use strict';

//dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');

//configuration
var db = require('./config/db')

//controllers
var userCtrl = require('./app/controllers/userCtrl');
var productCtrl = require('./app/controllers/productCtrl');

//express
var app = express();

//middleware
app.use('/', bodyParser.json());
app.use('/', morgan('dev'));
app.use('/', cors());
app.use('/', express.static('public'));

//routes

//users
// app.post('/api/users', userCtrl.create);
// app.get('/api/users/:userId', userCtrl.read);
// app.put('/api/users/:userId', userCtrl.update);
// app.delete('/api/users/:userId', userCtrl.delete);

//product

//test
app.get('/', function(req, res) {
	res.send('testtestetestsettest');
});

//connection to database
mongoose.connect(db.uri, function(err) {
	if (err) {
		console.log('Connection to MongoDB failed!');
	} else {
		console.log('Connected to MongoDb at: ', db.uri);
	}
});

//connection to server
app.listen(db.port, function(err) {
	if (err) {
		console.log('Connection to Node Server failed!');
	} else {
		console.log('Express listening on port ' + db.port);
	}
});
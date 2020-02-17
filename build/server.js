"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//app.js
var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();
//Import the mongoose module
var mongoose = require('mongoose');
//Set up default mongoose connection
mongoose.connect(process.env.DATABASE);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
//Bind connection to error event (to get notification of connection errors)
mongoose.connection
    .on('connected', function () {
    console.log("Mongoose connection open on " + process.env.DATABASE);
})
    .on('error', function (err) {
    console.log("Connection error: " + err.message);
});
// Routes
var product_route_1 = require("./routes/product.route"); // Imports routes for the products
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product_route_1.default);
var port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log('Server is up and running on port number ' + port);
});
//# sourceMappingURL=server.js.map
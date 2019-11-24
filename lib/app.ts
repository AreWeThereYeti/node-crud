//app.js
import express, { Request, Response } from "express";

const bodyParser = require("body-parser");
require("dotenv").config();

//Import the mongoose module
var mongoose = require("mongoose");

const dbUrl = 'mongodb://127.0.0.1:27017/products'

//Set up default mongoose connection
mongoose.connect(dbUrl, { useNewUrlParser: true });
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection

//Bind connection to error event (to get notification of connection errors)
mongoose.connection
  .on("connected", () => {
    console.log(`Mongoose connection open on ${dbUrl}`);
  })
  .on("error", (err: Error) => {
    console.log(`Connection error: ${err.message}`);
  });

// Routes
const product = require("./routes/product.route"); // Imports routes for the products

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/products", product);

let port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});

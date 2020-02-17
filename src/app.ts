require("dotenv").config();
import express, { Request, Response, NextFunction } from "express";

import bodyParser from "body-parser"; //used to parse the form data that you pass in the request

import Products from "./routes/product.route"; // Imports routes for the products
import Contracts from "./routes/contract.route"; // Imports routes for the products

class App {
  public app: express.Application;
  public productsRoutes: Products = new Products();
  public contractRoutes: Contracts = new Contracts();

  constructor() {
    this.app = express(); //run the express instance and store in app
    this.config();

    // Routes

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.productsRoutes.routes(this.app);
    this.contractRoutes.routes(this.app);
  }

  private config(): void {
    // support application/json type post data
    //Import the mongoose module
    var mongoose = require("mongoose");

    //Set up default mongoose connection
    mongoose.connect(process.env.DATABASE, {server:{auto_reconnect:true}});
    // Get Mongoose to use the global promise library
    mongoose.Promise = global.Promise;
    //Get the default connection

    //Bind connection to error event (to get notification of connection errors)
    mongoose.connection
      .on("connecting", () => {
        console.log(`Mongoose connection open on ${process.env.DATABASE}`);
      })
      .on("connected", () => {
        console.log(`Mongoose connection open on ${process.env.DATABASE}`);
      })
      .on("error", (err: any) => {
        console.error(`Connection error ------>>: ${err.message}. Should connect to ${process.env.DATABASE}`);
        mongoose.connect(process.env.DATABASE, {server:{auto_reconnect:true}});
      });
  }
}

export default new App().app;

import { Request, Response, NextFunction } from "express";
const fetch = require("node-fetch");


// Need authorization
exports.create_contract = function(req: Request, res: Response, next: NextFunction) {
  const endpoint = `${process.env.DOCUSIGN_ENDPOINT}restapi//v2/accounts/${process.env.DOCUSIGN_ACCOUNT_ID}/envelopes`;

    fetch(endpoint, {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
      })
      .then(res)
      .then(function (data: Response) {
        console.log('Request succeeded with JSON response', data);
      })
      .catch(function (error: Error) {
        console.log('Request failed', error);
      });

};


const Product = require('./../models/product.model');
import express, { Request, Response } from "express";


exports.product_create = function (req: Request, res: Response, next: Function) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err: Error) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req :Request, res: Response, next: Function) {
    Product.findById(req.params.id, function (err: Error, product: Object) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_get_all = function (req :Request, res: Response, next: Function) {
    Product.find({}, function(err: Error, product: Object) {
        if (err) return next(err);

        // object of all the users
        res.send(product);
      });
};

exports.product_details = function (req :Request, res: Response, next: Function) {
    Product.findById(req.params.id, function (err: Error, product: Object) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req :Request, res: Response,  next: Function) {
    Product.findOneAndUpdate(req.params.id, {$set: req.body}, function (err: Error, product: Object) {
        if (err) return next(err);
        res.send(product);
    });
};

exports.product_delete = function (req :Request, res: Response, next: Function) {
    Product.findByIdAndRemove(req.params.id, function (err: Error) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
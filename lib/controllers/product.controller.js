"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = require('./../models/product.model');
exports.product_create = function (req, res, next) {
    var product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully');
    });
};
exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err)
            return next(err);
        res.send(product);
    });
};
exports.product_get_all = function (req, res, next) {
    Product.find({}, function (err, product) {
        if (err)
            return next(err);
        // object of all the users
        res.send(product);
    });
};
exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err)
            return next(err);
        res.send(product);
    });
};
exports.product_update = function (req, res, next) {
    Product.findOneAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err)
            return next(err);
        res.send(product);
    });
};
exports.product_delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err)
            return next(err);
        res.send('Deleted successfully!');
    });
};

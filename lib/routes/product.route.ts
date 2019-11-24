import express from "express";

const router = express.Router();

// Require the controllers
const product_controller = require('./../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.
router.post('/', product_controller.product_create);
router.get('/', product_controller.product_get_all);
router.get('/:id', product_controller.product_details);

router.post('/:id', product_controller.product_update);

router.delete('/:id', product_controller.product_delete);

module.exports = router;
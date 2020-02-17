

// Require the controllers
const product_controller = require('../controllers/product.controller');

export class Products {

    public routes(app: any): void { //received the express instance from app.ts file
        app.post('/products', product_controller.product_create);
        app.get('/products', product_controller.product_get_all);
        app.get('/products:id', product_controller.product_details);

        app.post('/products:id', product_controller.product_update);

        app.delete('/products:id', product_controller.product_delete);
    }
}

// a simple test url to check that all of our files are communicating correctly.

export default Products;
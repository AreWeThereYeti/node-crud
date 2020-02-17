

// Require the controllers
const contract = require('../controllers/contract.controller');

export class Contracts {

    public routes(app: any): void { //received the express instance from app.ts file
        app.post('/create_contract', contract.create_contract);
    }
}

// a simple test url to check that all of our files are communicating correctly.

export default Contracts;
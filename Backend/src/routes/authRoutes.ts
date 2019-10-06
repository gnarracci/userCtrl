import { Router } from 'express';
import { AuthController } from './../controllers/authController';

const passport = require('../passport/passport');

class AuthRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.post('/login', AuthController.login );
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;

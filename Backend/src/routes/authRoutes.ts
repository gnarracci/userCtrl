import { Router } from 'express';
import { AuthController } from './../controllers/authController';

class AuthRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', AuthController.info);
        this.router.post('/', AuthController.login);
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;

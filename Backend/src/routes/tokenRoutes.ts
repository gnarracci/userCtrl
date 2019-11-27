import { Router } from 'express';

import { AuthController } from './../controllers/authController';

class TokenRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', AuthController.loggedIn);
    }

}

const tokenRoutes = new TokenRoutes();

export default tokenRoutes.router;
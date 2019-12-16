import { Router } from 'express';

import { miscControllers } from '../controllers/miscController';
import { TokenValidation } from '../auth/validateToken';

class MiscRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', TokenValidation, miscControllers.viewRole);
        this.router.post('/', TokenValidation, miscControllers.addRole);
    }

}

const miscRoutes = new MiscRoutes();

export default miscRoutes.router;

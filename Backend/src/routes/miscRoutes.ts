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
        this.router.get('/:id', TokenValidation, miscControllers.getRole);
        this.router.post('/', TokenValidation, miscControllers.addRole);
        this.router.put('/:id', TokenValidation, miscControllers.updateRole);
        this.router.delete('/:id', TokenValidation, miscControllers.deleteRole);
    }

}

const miscRoutes = new MiscRoutes();

export default miscRoutes.router;

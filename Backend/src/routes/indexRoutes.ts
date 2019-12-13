import { Router } from 'express';

import { indexController } from './../controllers/indexControllers';


class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', indexController.index);
        this.router.get('/', indexController.countries);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
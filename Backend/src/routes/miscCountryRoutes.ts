import { Router } from 'express';

import { miscCountryCtrls } from '../controllers/miscCountryCtrl';
import { TokenValidation } from '../auth/validateToken';

class MiscCounRoutes {

    public router: Router = Router();
    
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', TokenValidation, miscCountryCtrls.viewCounties);
        this.router.get('/:id', TokenValidation, miscCountryCtrls.getCountry);
        this.router.post('/', TokenValidation, miscCountryCtrls.addCountry);
        this.router.put('/:id', TokenValidation, miscCountryCtrls.updateCountry);
        this.router.delete('/:id', TokenValidation, miscCountryCtrls.deleteCountry);
    }

}

const miscCounRoutes = new MiscCounRoutes();

export default miscCounRoutes.router;
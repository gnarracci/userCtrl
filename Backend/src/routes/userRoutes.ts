import { Router } from 'express';

class UserRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res) => res.send('UserOps'));
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;

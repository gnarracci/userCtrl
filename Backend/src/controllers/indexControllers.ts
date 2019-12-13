import { Request, Response} from 'express';

import pool from '../database';

class IndexControllers {

    public index (req: Request, res: Response) {
        res.json({text: 'API works Successfully!!! /'});
    }

    public async countries( req: Request, res: Response) {
        const country = await pool.query('SELECT * FROM country')
        res.json(country);
    }

}

export const indexController = new IndexControllers();
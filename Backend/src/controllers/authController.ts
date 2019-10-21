import { Request, Response } from 'express';
import pool from '../database';

class AuthControllers {

    public info (req: Request, res: Response) {
        res.json({ text: 'API Login Routes Works!!!' });
    }

    public async login (req: Request, res: Response, info: any) {
        //console.log('Datos Recibidos en el Back:', req.body);
    }
}

export const AuthController = new AuthControllers();

export default AuthControllers;
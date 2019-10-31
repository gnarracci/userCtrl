import { Request, Response } from 'express';
import pool from '../database';

class AuthControllers {

    public info (req: Request, res: Response) {
        res.json({ text: 'API Login Routes Works!!!' });
    }

    public async login (req: Request, res: Response) {
        const username = req.body.username;
        const password = req.body.password;
        console.log(username, password);
    }
}

export const AuthController = new AuthControllers();

export default AuthControllers;
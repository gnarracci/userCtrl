import { Request, Response } from 'express';
import pool from '../database';
const bcryptjs = require('bcryptjs');

class RegisterControllers {

    public info (req: Request, res: Response) {
        res.json({ text: 'API Register Routes Works!!!' });
    }

    public async register (req: Request, res: Response) {
        await pool.query('INSERT INTO users set ?', [req.body]);
        res.json({message: 'User was Registered!'});
    }
}

export const RegisterController = new RegisterControllers();

export default RegisterControllers;
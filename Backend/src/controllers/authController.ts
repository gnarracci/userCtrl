import { Request, Response} from 'express';
import pool from '../database';
const bcrypt = require('bcryptjs');
const passport = require('passport');

class AuthControllers {

    public info (req: Request, res: Response) {
        res.json({ text: 'API Login Routes Works!!!' });
    }

    public login (req: Request, res: Response) {



        console.log(req.body);
        res.json({ message: 'Server Data Received!'});
    }
}

export const AuthController = new AuthControllers();
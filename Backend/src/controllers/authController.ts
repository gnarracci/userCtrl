import { Request, Response} from 'express';
import pool from '../database';
import { User } from '../models/users';
const bcrypt = require('bcryptjs');
import passport from 'passport';

class AuthControllers {

    public info (req: Request, res: Response) {
        res.json({ text: 'API Login Routes Works!!!' });
    }

    public login (req: Request, res: Response) {
        passport.authenticate('local')
        //console.log(req.body);
        res.json({ message: 'Server Data Received!'});
    }
}

export const AuthController = new AuthControllers();
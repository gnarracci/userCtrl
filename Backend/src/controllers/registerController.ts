import { Request, Response } from 'express';

import pool from '../database';
import { hashUser } from './../helpers';


class RegisterControllers {

    public async register (req: Request, res: Response) {
        const country = req.body.country; // Object Country with all data
        const newUser = {
            fullname: req.body.fullname,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            image: req.body.image,
            country: country.country,
            role: req.body.role,
            description: req.body.description
        };        
        newUser.password = await hashUser.encryptPassword(newUser.password);
        const result = await pool.query('INSERT INTO users SET  ?', [newUser]);
        res.status(200).json({message: 'User was Registered!'});
    }
}

export const RegisterController = new RegisterControllers();

export default RegisterControllers;
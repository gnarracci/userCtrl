import { Request, Response } from 'express';
import pool from '../database';
import { hashUser } from './../helpers';
import jwt from 'jsonwebtoken';
const SECRET_KEY = "secret_user_ctrl";

class RegisterControllers {

    public async register (req: Request, res: Response) {
        const newUser = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            image: req.body.image,
            role: req.body.role,
            country: req.body.country,
            description: req.body.description
        };
        newUser.password = await hashUser.encryptPassword(newUser.password);
        const result = await pool.query('INSERT INTO users SET  ?', [newUser]);
        const token = jwt.sign({id: result.insertId}, SECRET_KEY);
        res.header("auth-token", token).json({message: 'User was Registered!'});
    }
}

export const RegisterController = new RegisterControllers();

export default RegisterControllers;
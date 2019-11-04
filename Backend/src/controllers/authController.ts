import { Request, Response } from 'express';
import pool from '../database';
import { hashUser } from './../helpers';
import jwt from 'jsonwebtoken';
const SECRET_KEY = "secret_user_ctrl";

class AuthControllers {

    public async login (req: Request, res: Response) {
        const username = req.body.username;
        const password = req.body.password;

        const userSearch = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
        try{
            if (userSearch.length > 0) { console.log(userSearch[0].username); } else { res.status(404).json({message: 'Username is Wrong!'}); }
        }catch (err) {
            console.error(err);
        }

        const userPassSended = password;
        const userPassStored = userSearch[0].password;
        const expireIn = 60 * 60; // 3600 ms = 1 hr

        const validate = await hashUser.matchPassword(userPassSended, userPassStored);
        if (!validate) { res.status(404).json({message: "Password don't match!"}) };
        console.log(validate);
        const token: string = jwt.sign({id: userSearch[0].id}, SECRET_KEY, {
            expiresIn: expireIn
        });
        console.log(token);
        res.header('auth-token', token).json({message: 'User Access Successfully!'});
    }

    public async profile (req: Request, res: Response) {
        const token = req.header('auth-token');
        const id = (req.userId);
        const userData = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
        try{
            if (userData.length > 0) return res.status(200).json(userData[0]);
        }catch (err) {
           if (!userData) return res.status(404).json({message: "User don't found!"});
        }
    }
}

export const AuthController = new AuthControllers();

export default AuthControllers;
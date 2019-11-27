import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

import pool from '../database';
import { hashUser } from './../helpers';
const SECRET_KEY = "secret_user_ctrl";

class AuthControllers {

    public async login (req: Request, res: Response) {

        try{
            const userData = {
                username: req.body.username,
                password: req.body.password
            }
            const expireIn = 60 * 60 * 2 //7200 ms = 2 hrs
            const search = await pool.query("SELECT * FROM users WHERE username = ?", [userData.username]);
            if (search.length > 0) { /*console.log(search[0].username);*/ } else { res.status(404).json({message: 'Username is Wrong!'}); }
            const userPassStored = search[0].password;
            const validate = await hashUser.matchPassword(userData.password, userPassStored);
            if (!validate) { return res.status(404).json({message: "Passwords don't match!"});}
            const token: string = jwt.sign({id: search[0].id}, SECRET_KEY, {
                expiresIn: expireIn
            });
            res.header('auth-token', token).json({message: 'User Access Successfully!'});
            const userToken = {
                token: token,
                expireIn: expireIn,
                id_users: search[0].id
            }
            req.userIndex = search[0].id;
            console.log("Id User", req.userIndex);
            const result = await pool.query("INSERT INTO saveTokens SET ?", [userToken]);
        }catch (err) {
            console.log(err);
        }
    }

    public async profile (req: Request, res: Response) {
        const userData = await pool.query("SELECT * FROM users WHERE id = ?", [req.userId]);
        if (userData.length > 0) {
            res.status(200).json(userData[0]);
        }
    }

    public async loggedIn(req: Request, res: Response) {
        const resultToken = await pool.query("SELECT * FROM saveTokens WHERE id_users = ?", [req.userIndex]);
        if (resultToken > 0) {
            res.status(200).json(resultToken[0].token);
        }
    }

}

export const AuthController = new AuthControllers();

export default AuthControllers;
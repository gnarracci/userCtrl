import { Request, Response } from 'express';
import pool from '../database';
import { hashUser } from './../helpers';
import jwt from 'jsonwebtoken';
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
            const result = await pool.query("INSERT INTO saveTokens SET ?", [userToken]);
        }catch (err) {
            console.log(err);
        }
    }

    public async profile (req: Request, res: Response) {
        const userData = await pool.query("SELECT * FROM users WHERE id = ?", [req.userId]);
        if (userData.length > 0) {
            res.status(200).json(userData[0]);
            //console.log(userData[0]);
        }
    }
}

export const AuthController = new AuthControllers();

export default AuthControllers;
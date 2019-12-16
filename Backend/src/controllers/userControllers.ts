import { Request, Response} from 'express';

import pool from '../database';
import { hashUser } from './../helpers';

class UserControllers {

    public async list (req: Request, res: Response) {
        const users = await pool.query('SELECT * FROM users');
        res.json(users);
    }

    public async getOne (req: Request, res: Response) {
        const { id } = req.params;
        const users = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        if (users.length > 0) {
            return res.json(users[0]);
        }
        res.status(404).json({text: "User doesn't exists!"});
    }

    public async create (req: Request, res: Response) {
        const newUser = {
            fullname: req.body.fullname,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            image: req.body.image,
            role: req.body.role,
            country: req.body.country,
            description: req.body.description
        };
        newUser.password = await hashUser.encryptPassword(newUser.password);
        await pool.query('INSERT INTO users SET ?', [newUser]);
        res.json({message: 'User was Saved!'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        const updateUser = {
            fullname: req.body.fullname,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            image: req.body.image,
            role: req.body.role,
            country: req.body.country,
            description: req.body.description
        };
        updateUser.password = await hashUser.encryptPassword(updateUser.password);
        await pool.query('UPDATE users SET ? WHERE id = ?', [updateUser, id]);
        res.json({message: 'The User was Updated!'});
    }

    public async delete (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('DELETE FROM users WHERE id = ?', [id]);
        res.json({message: 'The User was deleted!'});
    }
}

export const userController = new UserControllers();

export default UserControllers;
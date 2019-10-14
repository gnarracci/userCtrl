import { Request, Response} from 'express';
import pool from '../database';
const bcrypt = require('bcryptjs');

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
        await pool.query('INSERT INTO users set ?', [req.body]);
        res.json({message: 'User Saved!'});
    }

    public async update (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE users set ? WHERE id = ?', [req.body, id]);
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
import { Request, Response} from 'express';

import pool from '../database';

class miscController {

    public async viewRole (req: Request, res: Response) {
        const role = await pool.query("SELECT * FROM role");
        res.status(200).json(role);
    }

    public async addRole (req: Request, res: Response) {
        const newRole = {
            role: req.body.role,
            role_descrip: req.body.role_descrip
        };
        await pool.query("INSERT INTO role SET ?", [newRole]);
        res.status(200).json({message: 'Role Saved!'});
    }

    public async editRole (req: Request, res: Response) {
        const { id } = req.params;
        const updateRole = {
            role: req.body.role,
            role_descrip: req.body.role_descrip
        }
        await pool.query("UPDATE role SET ? WHERE id = ?", [updateRole, id]);
        res.status(200).json({message: 'Role Updated!'});
    }

    public async deleteRole (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query("DELETE FROM role WHERE id = ?", [id]);
        res.status(200).json({message: 'Role Deleted!'});
    }

}

export const miscControllers = new miscController();

export default miscController;
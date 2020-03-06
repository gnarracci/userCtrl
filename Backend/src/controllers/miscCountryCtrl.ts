import { Request, Response } from 'express';

import pool from '../database';

class miscCountryCtrl {

    // Countries

    public async viewCounties (req: Request, res: Response) {
        const countries = await pool.query("SELECT * FROM country");
        res.status(200).json(countries);
    }

    public async getCountry (req: Request, res: Response) {
        const { id } = req.params;
        const country = await pool.query("SELECT * FROM country WHERE id = ?", [id]);
        if (country.length > 0) {
            return res.status(200).json(country[0]);
        }
        res.status(404).json({message: "Country doesn't finded!"});
    }

    public async addCountry (req: Request, res: Response) {
        const newCountry = {
            country: req.body.country
        }
        console.log(newCountry);
        await pool.query("INSERT INTO country SET ?", [newCountry]);
        res.status(200).json({message: "Country Added!"});
    }

    public async updateCountry (req: Request, res: Response) {
        const { id } = req.params;
        const updateCountry = {
            country: req.body.country
        }
        await pool.query("UPDATE country SET ? WHERE id = ?", [updateCountry, id]);
        res.status(200).json({message: "Country Updated!"});
    }

    public async deleteCountry (req: Request, res: Response) {
        const { id } = req.params;
        await pool.query("DELETE FROM country WHERE id = ?", [id]);
        res.status(200).json({message: "Country Deleted!"});
    }
}

export const miscCountryCtrls = new miscCountryCtrl();

export default miscCountryCtrl;                               

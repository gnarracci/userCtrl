import passport from 'passport';
import pool from '../database';
const LocalStrategy = require('passport-local').LocalStrategy;
import { AuthController } from './../controllers/authController';
import { doesNotReject } from 'assert';
import { any } from 'bluebird';

class Serialize {

    public serializeUser () {
        passport.serializeUser((username:any, done:any) => {
            done(null, username);
        });
    }

    public async deserializeUser (username:any, done:any) {
        const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        done(null, rows[0]);
    }
}

export const serialize = new Serialize();

export default Serialize;
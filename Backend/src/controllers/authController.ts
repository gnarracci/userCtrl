import { Request, Response} from 'express';

const passport = require('passport');

class AuthControllers {

    public login (req: Request, res: Response) {
        passport.authenticate('local.login', {
            successRedirect: '/profile',
            failureRedirect: '/login'
        })
    }
}

export const AuthController = new AuthControllers();
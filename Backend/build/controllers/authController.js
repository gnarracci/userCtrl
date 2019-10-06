"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require('passport');
class AuthControllers {
    login(req, res) {
        passport.authenticate('local.login', {
            successRedirect: '/profile',
            failureRedirect: '/login'
        });
    }
}
exports.AuthController = new AuthControllers();

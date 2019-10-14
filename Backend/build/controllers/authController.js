"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcryptjs');
const passport = require('passport');
class AuthControllers {
    info(req, res) {
        res.json({ text: 'API Login Routes Works!!!' });
    }
    login(req, res) {
        console.log(req.body);
        res.json({ message: 'Server Data Received!' });
    }
}
exports.AuthController = new AuthControllers();

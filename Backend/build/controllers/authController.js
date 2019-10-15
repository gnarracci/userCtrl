"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcryptjs');
const passport_1 = __importDefault(require("passport"));
class AuthControllers {
    info(req, res) {
        res.json({ text: 'API Login Routes Works!!!' });
    }
    login(req, res) {
        passport_1.default.authenticate('local');
        //console.log(req.body);
        res.json({ message: 'Server Data Received!' });
    }
}
exports.AuthController = new AuthControllers();

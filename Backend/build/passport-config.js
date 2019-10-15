"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const LocalStrategy = require('passport-local').Strategy;
passport_1.default.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    reqToCallback: true
}, (req, username, password, done) => {
    console.log(req.body);
}));

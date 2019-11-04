"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const helpers_1 = require("./../helpers");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "secret_user_ctrl";
class AuthControllers {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const username = req.body.username;
            const password = req.body.password;
            const userSearch = yield database_1.default.query("SELECT * FROM users WHERE username = ?", [username]);
            try {
                if (userSearch.length > 0) {
                    console.log(userSearch[0].username);
                }
                else {
                    res.status(404).json({ message: 'Username is Wrong!' });
                }
            }
            catch (err) {
                console.error(err);
            }
            const userPassSended = password;
            const userPassStored = userSearch[0].password;
            const expireIn = 60 * 60; // 3600 ms = 1 hr
            const validate = yield helpers_1.hashUser.matchPassword(userPassSended, userPassStored);
            if (!validate) {
                res.status(404).json({ message: "Password don't match!" });
            }
            ;
            console.log(validate);
            const token = jsonwebtoken_1.default.sign({ id: userSearch[0].id }, SECRET_KEY, {
                expiresIn: expireIn
            });
            console.log(token);
            res.header('auth-token', token).json({ message: 'User Access Successfully!' });
        });
    }
    profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.header('auth-token');
            const id = (req.userId);
            const userData = yield database_1.default.query("SELECT * FROM users WHERE id = ?", [id]);
            try {
                if (userData.length > 0)
                    return res.status(200).json(userData[0]);
            }
            catch (err) {
                if (!userData)
                    return res.status(404).json({ message: "User don't found!" });
            }
        });
    }
}
exports.AuthController = new AuthControllers();
exports.default = AuthControllers;
//# sourceMappingURL=authController.js.map
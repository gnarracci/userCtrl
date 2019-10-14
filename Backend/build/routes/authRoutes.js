"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("./../controllers/authController");
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', authController_1.AuthController.info);
        this.router.post('/', authController_1.AuthController.login);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('UserOps'));
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;

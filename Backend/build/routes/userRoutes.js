"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', userControllers_1.userController.list);
        this.router.get('/:id', userControllers_1.userController.getOne);
        this.router.post('/', userControllers_1.userController.create);
        this.router.put('/:id', userControllers_1.userController.update);
        this.router.delete('/:id', userControllers_1.userController.delete);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;

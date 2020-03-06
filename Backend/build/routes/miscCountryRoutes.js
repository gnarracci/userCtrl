"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const miscCountryCtrl_1 = require("../controllers/miscCountryCtrl");
const validateToken_1 = require("../auth/validateToken");
class MiscCounRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', validateToken_1.TokenValidation, miscCountryCtrl_1.miscCountryCtrls.viewCounties);
        this.router.get('/:id', validateToken_1.TokenValidation, miscCountryCtrl_1.miscCountryCtrls.getCountry);
        this.router.post('/', validateToken_1.TokenValidation, miscCountryCtrl_1.miscCountryCtrls.addCountry);
        this.router.put('/:id', validateToken_1.TokenValidation, miscCountryCtrl_1.miscCountryCtrls.updateCountry);
        this.router.delete('/:id', validateToken_1.TokenValidation, miscCountryCtrl_1.miscCountryCtrls.deleteCountry);
    }
}
const miscCounRoutes = new MiscCounRoutes();
exports.default = miscCounRoutes.router;
//# sourceMappingURL=miscCountryRoutes.js.map
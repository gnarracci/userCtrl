"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class miscCountryCtrl {
    // Countries
    viewCounties(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const countries = yield database_1.default.query("SELECT * FROM country");
            res.status(200).json(countries);
        });
    }
    getCountry(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const country = yield database_1.default.query("SELECT * FROM country WHERE id = ?", [id]);
            if (country.length > 0) {
                return res.status(200).json(country[0]);
            }
            res.status(404).json({ message: "Country doesn't finded!" });
        });
    }
    addCountry(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCountry = {
                country: req.body.country
            };
            console.log(newCountry);
            yield database_1.default.query("INSERT INTO country SET ?", [newCountry]);
            res.status(200).json({ message: "Country Added!" });
        });
    }
    editCountry(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const updateCountry = {
                country: req.body.country
            };
            yield database_1.default.query("UPDATE country SET ? WHERE id = ?", [updateCountry, id]);
            res.status(200).json({ message: "Country Updated!" });
        });
    }
    deleteCountry(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM country WHERE id = ?", [id]);
            res.status(200).json({ message: "Country Deleted!" });
        });
    }
}
exports.miscCountryCtrls = new miscCountryCtrl();
exports.default = miscCountryCtrl;
//# sourceMappingURL=miscCountryCtrl.js.map
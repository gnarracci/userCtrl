"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs = require('bcryptjs');
class HashUser {
    encryptPassword(req, res) {
        (password) => __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcryptjs.genSalt(10);
            const hash = yield bcryptjs.hash(password, salt);
            return hash;
        });
    }
    matchPassword() {
        (password, savedPassword) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield bcryptjs.compare(password, savedPassword);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.hashUser = new HashUser();
exports.default = HashUser;

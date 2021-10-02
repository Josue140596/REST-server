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
exports.isEmailValid = exports.isRolValid = void 0;
//Models
const Usuario_1 = __importDefault(require("../models/Usuario"));
const Role_1 = __importDefault(require("../models/Role"));
const isRolValid = (rol) => __awaiter(void 0, void 0, void 0, function* () {
    const existRole = yield Role_1.default.findOne({ rol });
    if (!existRole) {
        throw new Error(`${rol} is not valids`);
    }
});
exports.isRolValid = isRolValid;
const isEmailValid = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const existEmail = yield Usuario_1.default.findOne({ email });
    if (existEmail) {
        throw new Error(`This ${email} already exist`);
    }
});
exports.isEmailValid = isEmailValid;
//# sourceMappingURL=db-validators.js.map
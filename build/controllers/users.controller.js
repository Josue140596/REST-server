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
exports.patchUser = exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = void 0;
//Models
const Usuario_1 = __importDefault(require("../models/Usuario"));
//Encrypt Password
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getUser = (req, res) => {
    const query = req.query;
    const t = req.body;
    res.json({
        ok: true,
        msg: "get api",
        query,
        t
    });
};
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, rol } = req.body;
    const user = new Usuario_1.default({ name, email, password, rol });
    //Encript Password
    //How many salts do you want?
    const salt = bcryptjs_1.default.genSaltSync(10);
    user.password = bcryptjs_1.default.hashSync(password, salt);
    //Save in DB
    yield user.save();
    res.json({
        user
    });
});
exports.postUser = postUser;
const putUser = (req, res) => {
    const { id } = req.params;
    res.json({
        ok: true,
        msg: "put api",
        id
    });
};
exports.putUser = putUser;
const deleteUser = (req, res) => {
    res.json({
        ok: true,
        msg: "delete api",
    });
};
exports.deleteUser = deleteUser;
const patchUser = (req, res) => {
    res.json({
        ok: true,
        msg: "patch api",
    });
};
exports.patchUser = patchUser;
//# sourceMappingURL=users.controller.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchUser = exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = void 0;
exports.getUser = ((req, res) => {
    const query = req.query;
    res.json({
        ok: true,
        msg: "get api",
        query
    });
});
exports.postUser = ((req, res) => {
    const body = req.body;
    res.json({
        ok: true,
        msg: "post api",
        body
    });
});
exports.putUser = ((req, res) => {
    const { id } = req.params;
    res.json({
        ok: true,
        msg: "put api",
        id
    });
});
exports.deleteUser = ((req, res) => {
    res.json({
        ok: true,
        msg: "delete api",
    });
});
exports.patchUser = ((req, res) => {
    res.json({
        ok: true,
        msg: "patch api",
    });
});
//# sourceMappingURL=users.controller.js.map
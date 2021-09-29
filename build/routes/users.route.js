"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
//Controllers
const users_controller_2 = require("../controllers/users.controller");
const router = (0, express_1.Router)();
router.get("/", users_controller_2.getUser);
router.post("/", users_controller_2.postUser);
router.put("/:id", users_controller_2.putUser);
router.delete("/", users_controller_2.deleteUser);
router.patch("/", users_controller_1.patchUser);
exports.default = router;
//# sourceMappingURL=users.route.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const users_controller_1 = require("../controllers/users.controller");
const validation_field_1 = require("../middlewares/validation-field");
//Helpers
const db_validators_1 = require("../helpers/db-validators");
//Controllers
const users_controller_2 = require("../controllers/users.controller");
const router = (0, express_1.Router)();
router.get("/", users_controller_2.getUser);
router.post("/", [
    (0, express_validator_1.check)('name', 'Name is required').not().isEmpty(),
    (0, express_validator_1.check)('email').custom(db_validators_1.isEmailValid),
    (0, express_validator_1.check)('password', 'Password must be more than 6 letters').isLength({ min: 6 }),
    (0, express_validator_1.check)('rol').custom(db_validators_1.isRolValid),
    validation_field_1.validationField
], users_controller_2.postUser);
router.put("/:id", users_controller_2.putUser);
router.delete("/", users_controller_2.deleteUser);
router.patch("/", users_controller_1.patchUser);
exports.default = router;
//# sourceMappingURL=users.route.js.map
import { Router } from "express";
import { check } from "express-validator";
import { patchUser } from '../controllers/users.controller';
import { validationField } from '../middlewares/validation-field';
//Helpers
import { isRolValid, isEmailValid } from '../helpers/db-validators';
//Controllers
import {
  getUser,
  postUser,
  putUser,
  deleteUser,
} from "../controllers/users.controller";

const router = Router();

router.get("/", getUser);
router.post("/",[
  check('name', 'Name is required').not().isEmpty(),
  check('email').custom(isEmailValid),
  check('password', 'Password must be more than 6 letters').isLength({min: 6}),
  check('rol').custom(isRolValid),
  validationField
] , postUser);
router.put("/:id", putUser);
router.delete("/", deleteUser);
router.patch("/", patchUser);

export default router;
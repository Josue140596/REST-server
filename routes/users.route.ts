import { Router } from "express";
import { patchUser } from '../controllers/users.controller';
//Controllers
import {
  getUser,
  postUser,
  putUser,
  deleteUser,
} from "../controllers/users.controller";

const router = Router();

router.get("/", getUser);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/", deleteUser);
router.patch("/", patchUser);

export default router;
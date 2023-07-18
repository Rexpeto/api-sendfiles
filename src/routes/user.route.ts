import { Router } from "express";
import { validateRegister } from "../validators/user.validator";
import { login, register } from "../controllers/user.ctrl";

export const router = Router();

//? Route of login user
router.post("/login", login);

//? Route of register user
router.post("/register", validateRegister, register);

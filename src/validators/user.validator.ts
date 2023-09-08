import { check } from "express-validator";
import { validateResult } from "@/utils/validator.handle";
import { NextFunction, Request, Response } from "express";

export const validateRegister = [
	check("name", "Debe colocar un nombre").exists().notEmpty(),
	check("email", "Debe colocar un correo eléctronico").exists().isEmail().withMessage("Correo eléctronico inválido"),
	check("password", "Debe colocar una contraseña").exists().notEmpty(),
	(req: Request, res: Response, next: NextFunction) => {
		validateResult(req, res, next);
	}
];

// Validator login user
export const validateLogin = [
	check("email", "Debes colocar un correo electrónico").exists().isEmail(),
	check("password", "Debes colocar una contraseña").exists().notEmpty(),
	(req: Request, res: Response, next: NextFunction) => {
		validateResult(req, res, next);
	}
];

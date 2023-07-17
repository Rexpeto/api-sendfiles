import { Request, Response } from "express";
import { newUser } from "../services/user.service";

export const login = (req: Request, res: Response) => {
	res.status(200).json({ msg: "Iniciar sesión" });
};

export const register = async ({ body }: Request, res: Response) => {
	const { name, email, password } = body;

	if (!name) return res.status(403).json({ msg: "Debe colocar un nombre" });

	if (!email) return res.status(403).json({ msg: "Debe colocar un correo electronico" });

	if (!password) return res.status(403).json({ msg: "Debe colocar una contraseña" });

	const user: any = await newUser({
		name: name.toLowerCase(),
		email: email.toLowerCase(),
		password: password.toLowerCase()
	});

	if (user?.error) {
		return res.status(user.error).json({ msg: user.msg });
	}

	res.status(200).json(user);
};

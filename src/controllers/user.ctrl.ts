import { Request, Response } from "express";
import { newUser } from "../services/user.service";

export const login = (req: Request, res: Response) => {
	res.status(200).json({ msg: "Iniciar sesión" });
};

export const register = async ({ body }: Request, res: Response) => {
	const { name, email, password } = body;

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

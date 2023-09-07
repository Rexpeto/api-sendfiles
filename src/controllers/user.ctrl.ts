import { Request, Response } from "express";
import { newUser, loginUser } from "../services/user.service";

export const login = async ({ body }: Request, res: Response) => {
	try {
		const response = await loginUser(body);

		if (response.error) {
			return res.status(response.error).json({ msg: response.msg });
		}

		res.cookie("accessToken", response.jwt, {
			maxAge: 7200000,
			httpOnly: true,
			sameSite: "lax"
		});

		res.status(200).json(response);
	} catch (error) {
		console.log(error);
	}
};

export const register = async ({ body }: Request, res: Response) => {
	const { name, email, password } = body;

	const user: any = await newUser({
		name: name.toLowerCase(),
		email: email.toLowerCase(),
		password
	});

	if (user?.error) {
		return res.status(user.error).json({ msg: user.msg });
	}

	res.status(200).json(user);
};

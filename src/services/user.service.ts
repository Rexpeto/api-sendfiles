import { UserInterface } from "../types/User.type";
import User from "../models/User.model";
import { encrypt } from "../utils/bcrypt.handle";

export const newUser = async ({ name, email, password }: UserInterface) => {
	try {
		const isCheck = await User.findOne({ email });

		if (isCheck) return { msg: "El usuario ya existe", error: 403 };

		//* Hash password of user
		const passwordHash = await encrypt(password);

		const user = User.create({ name, email, password: passwordHash });

		return user;
	} catch (error) {
		console.log(error);
		return { msg: "Ooops!! Ocurrio un error", error: 502 };
	}
};

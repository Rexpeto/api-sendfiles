import { UserInterface } from "@/types/User.type";
import User from "@/models/User.model";
import { Verified, encrypt } from "@/utils/bcrypt.handle";
import { signToken } from "@/utils/jwt.handle";

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

export const loginUser = async ({ email, password }: UserInterface) => {
	try {
		const isCheck = await User.findOne({ email });

		if (!isCheck) return { msg: "El usuario no existe", error: 404 };

		//* Hash password of user
		const passwordHash = isCheck.password;
		const isCorrect = await Verified(passwordHash, password);

		if (!isCorrect) return { msg: "Correo o contraseña incorrectas", error: 403 };

		const { _id, name, email: emailUser } = isCheck;

		const jwt = signToken({ _id: `${_id}`, name, email });

		return { _id, name, email: emailUser, jwt };
	} catch (error) {
		console.log(error);
		return { msg: "Ooops!! Ocurrio un error", error: 502 };
	}
};

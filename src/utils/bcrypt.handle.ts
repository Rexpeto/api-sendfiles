import { compare, hash } from "bcrypt";

//? Encrypt password of user
export const encrypt = (password: string) => {
	const passwordHash = hash(password, 10);
	return passwordHash;
};

import { compare, hash } from "bcrypt";

//? Encrypt password of user
export const encrypt = (password: string) => {
	const passwordHash = hash(password, 10);
	return passwordHash;
};

//? Verified password of user
export const Verified = async (passwordHash: string, password: string) => {
	const isCorrect = await compare(password, passwordHash);
	return isCorrect;
};

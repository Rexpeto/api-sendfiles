import { sign, verify } from "jsonwebtoken";

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || "token-secret";

// Generate JWT
export const signToken = ({ _id, name, email }: { _id: string, name: string, email: string }) => {
	const jwt = sign({ _id, name, email }, JWT_SECRET, {
		expiresIn: "1h"
	});

	return jwt;
};

// Verify JWT
export const verifyToken = (token: string) => {
	const isOk = verify(token, JWT_SECRET);

	return isOk;
};

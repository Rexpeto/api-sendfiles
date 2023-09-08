import { ReqExt } from "@/types/ReqExt.type";
import { verifyToken } from "@/utils/jwt.handle";
import { Response, NextFunction } from "express";

//? Session active user
const sessionActive = (req: ReqExt, res: Response, next: NextFunction) => {
	try {
		const jwtByUser = req.headers.authorization ?? null;
		const jwt = jwtByUser?.split(" ").pop();

		const isUser = verifyToken(`${jwt}`);

		if (!isUser) return res.status(400).json({ error: "NOT_TOKEN" });

		req.user = isUser;
		next();
	} catch (error) {
		res.status(400).json({ error: "NOT_SESSION" });
	}
};

export default sessionActive;

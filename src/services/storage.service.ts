import { ReqExt } from "@/types";
import { Response } from "express";

//? Created new storage
export const newStorage = (req: ReqExt, res: Response) => {
	res.status(200).json({ msg: "Storage created" });
};

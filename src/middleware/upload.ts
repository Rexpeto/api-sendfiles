import { Request } from "express";
import multer, { diskStorage } from "multer";

const PATH_STORAGE = `${process.cwd()}${process.env.PATH_STORAGE}`;

const storageFile = diskStorage({
	destination(req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
		cb(null, PATH_STORAGE);
	},
	filename(req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
		cb(null, `${Date.now()}-${file.originalname}`);
	}
});

export const storage = multer({ storage: storageFile });

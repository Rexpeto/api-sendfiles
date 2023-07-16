import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
    res.status(200).json({ msg: "Iniciar sesión" });
};

export const register = (req: Request, res: Response) => {
    res.status(200).json({ msg: "registrar usuario" });
};

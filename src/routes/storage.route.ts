import { sessionActive } from "@/middleware";
import { newStorage } from "@/services";
import { Router } from "express";

export const router = Router();

// new storage
router.post("/new", sessionActive, newStorage);

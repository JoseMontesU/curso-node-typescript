import { Request, Response, Router } from "express";
import { loginContr, registerContr } from "../controllers/auth";


const router = Router();

router.post("/register", registerContr);
router.post("/login", loginContr);

export { router };
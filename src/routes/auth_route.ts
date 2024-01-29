import { Router } from "express";
import { validarLogin } from "../interfaces/login_interface";
import { postLogin } from "../controllers/auth_controller";
const router = Router();
router.post('/login', [...validarLogin], postLogin);
export default router;

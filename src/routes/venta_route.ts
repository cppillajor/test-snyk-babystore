import { Router } from "express";
import { authMiddleware } from "../middlewares/auth_middleware";
import { validarVenta } from "../interfaces/venta_interface";
import { getAll,getOne,create,update,remove } from "../controllers/venta_controller";
const router = Router();
router.get('/', [authMiddleware] , getAll);
router.get('/:ven_id', [authMiddleware], getOne);
router.post('/', [authMiddleware,...validarVenta], create);
router.put('/:ven_id', [authMiddleware,...validarVenta], update);
router.delete('/:ven_id', [authMiddleware], remove);
export default router;
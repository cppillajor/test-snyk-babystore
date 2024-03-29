import { Router } from "express";
import { authMiddleware } from "../middlewares/auth_middleware";
import { validarProducto } from "../interfaces/producto_interface";
import { getAll,getOne,create,update,remove } from "../controllers/producto_controller";
import { upload } from "../middlewares/upload_middleware";
const router = Router();
router.get('/', [authMiddleware] , getAll);
router.get('/:pro_id', [authMiddleware], getOne);
router.post('/', [authMiddleware,upload.single('image')], create);
router.put('/:pro_id', [authMiddleware,...validarProducto], update);
router.delete('/:pro_id', [authMiddleware], remove);
export default router;

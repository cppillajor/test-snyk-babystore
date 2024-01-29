import { Router } from "express";
import { authMiddleware } from "../middlewares/auth_middleware";
import { validarPersonaCrear,validarPersonaActualizar } from "../interfaces/persona_interface";
import { getAll,getOne,create,update,remove } from "../controllers/persona_controller"

const router = Router();

router.get('/', [authMiddleware] , getAll);
router.get('/:per_id', [authMiddleware], getOne);
router.post('/', [authMiddleware,...validarPersonaCrear], create);
router.put('/:per_id', [authMiddleware,...validarPersonaActualizar], update);
router.delete('/:per_id', [authMiddleware], remove);


export default router;

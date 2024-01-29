import { Router } from 'express'
import { AssociationsModelDataBase } from '../database/associations';
import PersonaRoute from './persona_route'
import AuthRouter from './auth_route'
import CategoriaRouter from './categoria_route'
import ComprasRouter from './compras_route'
import MenuRouter from './menu_route'
import ProductoRouter from './producto_route'
import ProveedorRouter from './proveedor_route'
import RolRouter from './rol_route'
import VentaRouter from './venta_route'
import uploadRouter from './upload_route'
const router = Router()
AssociationsModelDataBase();
router.use('/api', AuthRouter)
router.use('/api/persona', PersonaRoute)
router.use('/api/categoria', CategoriaRouter)
router.use('/api/compras', ComprasRouter)
router.use('/api/menu', MenuRouter)
router.use('/api/producto', ProductoRouter)
router.use('/api/proveedor', ProveedorRouter)
router.use('/api/rol', RolRouter)
router.use('/api/venta', VentaRouter)
router.use('/api', uploadRouter)
export default router
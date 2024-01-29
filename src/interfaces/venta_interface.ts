import { IsString, IsOptional, IsNumber} from "class-validator";
import { check } from 'express-validator/src/middlewares/validation-chain-builders';
import { validationMiddleware } from "../middlewares/validation_middleware";

export class VentaInterface {    
  
  @IsNumber()
  @IsOptional()
  per_id_cliente?:number;

  @IsNumber()
  @IsOptional()
  per_id_vendedor?:number;

  
  @IsString()
  @IsOptional()
  ven_subtotal?:string; 

  @IsString()
  @IsOptional()
  ven_iva?:string; 

  @IsString()
  @IsOptional()
  ven_total?:string; 

  @IsString()
  @IsOptional()
  ven_descripcion?:string; 

  @IsString()
  @IsOptional()
  ven_detalle_venta?:Text; 


}
export const validarVenta  = [
    check('per_id_cliente','per_id_cliente is required').notEmpty(),
    check('per_id_vendedor','per_id_vendedor is required').notEmpty(),
    check('ven_subtotal','ven_subtotal is required').notEmpty(),
    check('ven_iva','ven_iva is required').notEmpty(),
    check('ven_total','ven_total is required').notEmpty(),
    check('ven_descripcion','ven_descripcion is required').notEmpty(),
    check('ven_detalle_venta','ven_detalle_venta is required').notEmpty(),
    validationMiddleware,
];


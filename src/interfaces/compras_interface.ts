import { IsString, IsOptional,IsDate, IsNumber} from "class-validator";
import { check } from 'express-validator/src/middlewares/validation-chain-builders';
import { validationMiddleware } from "../middlewares/validation_middleware";

export class ComprasInterface {  
   
  @IsDate()
  @IsOptional()
  com_fecha?:Date;

  @IsNumber()
  @IsOptional()
  com_stock_compra?:number;

  @IsNumber()
  @IsOptional()
  pro_id?:number;

  @IsNumber()
  @IsOptional()
  prov_id?:number;

  @IsString()
  @IsOptional()
  com_descripcion?:string;

  @IsString()
  @IsOptional()
  com_total_compra?:string;


}
export const validarCompras  = [
    check('com_fecha','com_fecha is required').notEmpty(),
    check('com_stock_compra','com_stock_compra is required').notEmpty(),
    check('pro_id','pro_id is required').notEmpty(),
    check('prov_id','prov_id is required').notEmpty(),
    check('com_descripcion','com_descripcion is required').notEmpty(),
    check('com_total_compra','com_total_compra is required').notEmpty(),
    validationMiddleware,
];


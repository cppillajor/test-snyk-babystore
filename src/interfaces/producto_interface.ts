import { IsString, IsOptional,IsNumber} from "class-validator";
import { check } from 'express-validator/src/middlewares/validation-chain-builders';
import { validationMiddleware } from "../middlewares/validation_middleware";

export class ProductoInterface {    
  
  @IsString()
  @IsOptional()
  pro_nombre?:string;

  @IsNumber()
  @IsOptional()
  pro_stock?:number;

  @IsString()
  @IsOptional()
  pro_descripcion?:string;

  @IsString()
  @IsOptional()
  pro_imagen?:string;

  @IsNumber()
  @IsOptional()
  cat_id?:number;

  @IsNumber()
  @IsOptional()
  prov_id?:number;

  @IsString()
  @IsOptional()
  pro_precio?:string;


}
export const validarProducto  = [
    check('pro_nombre','pro_nombre is required').notEmpty(),
    check('pro_stock','pro_stock is required').notEmpty(),
    check('pro_descripcion','pro_descripcion is required').notEmpty(),
    check('cat_id','cat_id is required').notEmpty(),
    check('prov_id','prov_id is required').notEmpty(),
    check('pro_precio','pro_precio is required').notEmpty(),
    validationMiddleware,
];


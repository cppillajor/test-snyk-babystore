import { IsString, IsOptional} from "class-validator";
import { check } from 'express-validator/src/middlewares/validation-chain-builders';
import { validationMiddleware } from "../middlewares/validation_middleware";

export class ProveedorInterface {    
  
  @IsString()
  @IsOptional()
  prov_nombre?:string;

  @IsString()
  @IsOptional()
  prov_ubicacion?:string; 
}
export const validarProveedor  = [
    check('prov_nombre','prov_nombre is required').notEmpty(),
    check('prov_ubicacion','prov_ubicacion is required').notEmpty(),
    validationMiddleware,
];


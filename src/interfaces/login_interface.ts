import { IsString, IsOptional} from "class-validator";
import { check } from 'express-validator/src/middlewares/validation-chain-builders';
import { validationMiddleware } from "../middlewares/validation_middleware";

export class LoginInterface {  
  @IsString()
  @IsOptional()
  per_correo?: string;

  @IsString()
  @IsOptional()
  per_clave?: string;  
}
export const validarLogin    = [    
    check('per_correo','per_correo es requerido').notEmpty().isEmail(),
    check('per_clave','per_clave es requerido').notEmpty(),
    validationMiddleware,
];
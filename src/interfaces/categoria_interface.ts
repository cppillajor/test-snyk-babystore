import { IsString, IsOptional} from "class-validator";
import { check } from 'express-validator/src/middlewares/validation-chain-builders';
import { validationMiddleware } from "../middlewares/validation_middleware";

export class CategoriaInterface {  
  @IsString()
  @IsOptional()
  cat_nombre?: string;   
}
export const validarCategoria    = [
    check('cat_nombre','cat_nombre es requerido').notEmpty(),
    validationMiddleware,
];


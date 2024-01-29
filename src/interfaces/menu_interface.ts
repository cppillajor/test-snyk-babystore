import { IsString, IsOptional,IsNumber} from "class-validator";
import { check } from 'express-validator/src/middlewares/validation-chain-builders';
import { validationMiddleware } from "../middlewares/validation_middleware";

export class menuInterface {    
  
  @IsString()
  @IsOptional()
  men_nombre?:string;

  @IsString()
  @IsOptional()
  men_link?:string;

  @IsString()
  @IsOptional()
  men_icono?:string;

  @IsNumber()
  @IsOptional()
  rol_id?:number;

  @IsNumber()
  @IsOptional()
  men_id_sub_men?:number;


}
export const validarMenu  = [
    check('men_nombre','men_nombre is required').notEmpty(),
    check('men_link','men_link is required').notEmpty(),
    check('men_icono','men_icono is required').notEmpty(),
    check('rol_id','rol_id is required').notEmpty(),
    check('men_id_sub_men','men_id_sub_men is required').notEmpty(),
    validationMiddleware,
];


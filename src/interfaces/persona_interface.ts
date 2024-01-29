import { IsString, IsOptional, IsDate, IsNumber} from "class-validator";
import { check } from 'express-validator/src/middlewares/validation-chain-builders';
import { validationMiddleware } from "../middlewares/validation_middleware";

export class PersonaInterface {
  

  @IsString()
  @IsOptional()
  per_nombre?: string;

  @IsString()
  @IsOptional()
  per_apellido?: string;

  @IsString()
  @IsOptional()
  per_correo?: string;

  @IsString()
  @IsOptional()
  per_clave?: string;

  @IsString()
  @IsOptional()
  per_sexo?: string;

  @IsDate()
  @IsOptional()
  per_fecha_nacimiento?: Date;

  @IsNumber()
  @IsOptional()
  rol_id?: number;  
}
export const validarPersonaCrear    = [
    check('per_nombre','per_nombre es requerido').notEmpty(),
    check('per_apellido','per_apellido es requerido').notEmpty(),
    check('per_correo','per_correo es requerido').notEmpty().isEmail(),
    check('per_clave','per_clave es requerido').notEmpty(),
    check('per_sexo','per_sexo es requerido').notEmpty(),
    check('per_fecha_nacimiento','per_fecha_nacimiento es requerido').notEmpty(),
    check('rol_id','rol_id es requerido').notEmpty(),
    validationMiddleware,
];
export const validarPersonaActualizar    = [
  check('per_nombre','per_nombre es requerido').notEmpty(),
  check('per_apellido','per_apellido es requerido').notEmpty(),
  check('per_correo','per_correo es requerido').notEmpty().isEmail(),
  check('per_sexo','per_sexo es requerido').notEmpty(),
  check('per_fecha_nacimiento','per_fecha_nacimiento es requerido').notEmpty(),
  check('rol_ids','rol_ids es requerido').notEmpty(),
  validationMiddleware,
];

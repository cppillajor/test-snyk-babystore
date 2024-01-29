import { IsString, IsOptional } from "class-validator";
import { check } from "express-validator/src/middlewares/validation-chain-builders";
import { validationMiddleware } from "../middlewares/validation_middleware";

export class RolInterface {
  @IsString()
  @IsOptional()
  rol_nombre?: string;
}
export const validarRol = [
  check("rol_nombre", "rol_nombre is required").notEmpty(),
  validationMiddleware,
];

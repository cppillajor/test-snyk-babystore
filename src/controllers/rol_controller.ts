import { Request, Response } from "express";
import { getActiveRol,getOneRolbyId,createRol,updateRol,removeRol } from "../services/rol_service";
import { RolInterface } from "../interfaces/rol_interface";
export const getAll = async (_req: Request, res: Response) => {
  try {
    const respuesta = await getActiveRol();
    if (respuesta.length === 0) {
      return res.status(400).json({
        msg: `there are no active Rol`,
      });
    }
    return res.json({
      msg: `data list`,
      dato: respuesta,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `internal error`,
      error: `${error}`,
    });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const { rol_id } = req.params;
    const respuesta = await getOneRolbyId(rol_id);
    if (!respuesta) {
      return res.status(400).json({
        msg: `the Rol was not found`,
      });
    }
    return res.json({
      msg: `data list`,
      dato: [respuesta],
    });
  } catch (error) {
    return res.status(500).json({
      msg: `internal error`,
      error: `${error}`,
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const peticion: RolInterface = req.body;
    const respuesta = await createRol(peticion);    
    return res.json({
      msg: `A new Rol has been created`,
      dato: [respuesta],
    });
  } catch (error) {
    return res.status(500).json({
      msg: `internal error`,
      error: `${error}`,
    });
  }
};
export const update = async (req: Request, res: Response) => {
  try {
    const peticion: RolInterface = req.body;
    const { rol_id } = req.params;
    const respuesta = await updateRol(rol_id,peticion);
    return res.json({
      msg: `Rol has been updated`,
      dato: [respuesta],
    });
  } catch (error) {
    return res.status(500).json({
      msg: `internal error`,
      error: `${error}`,
    });
  }
};
export const remove = async (req: Request, res: Response) => {
    try {      
      const { rol_id } = req.params;
      const respuesta = await removeRol(rol_id);
      return res.json({
        msg: `The rol with the id was removed: ${rol_id}`,
        dato: [respuesta],
      });
    } catch (error) {
      return res.status(500).json({
        msg: `internal error`,
        error: `${error}`,
      });
    }
  };
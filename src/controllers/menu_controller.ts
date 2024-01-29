import { Request, Response } from "express";
import { getMenuActivas,getUnaMenuPorId,crearMenu,actualizarMenu,eliminarMenu } from "../services/menu_service";
import { menuInterface } from "../interfaces/menu_interface";

export const getAll = async (_req: Request, res: Response) => {
  try {
    const respuesta = await getMenuActivas();
    if (respuesta.length === 0) {
      return res.status(400).json({
        msg: `there are no active menu`,
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
    const { men_id } = req.params;
    const respuesta = await getUnaMenuPorId(men_id);
    if (!respuesta) {
      return res.status(400).json({
        msg: `the menu was not found`,
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
    const peticion: menuInterface = req.body;
    const respuesta = await crearMenu(peticion);    
    return res.json({
      msg: `A new menu has been created`,
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
    const peticion: menuInterface = req.body;
    const { men_id } = req.params;
    const respuesta = await actualizarMenu(men_id,peticion);
    return res.json({
      msg: `Menu has been updated`,
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
      const { men_id } = req.params;
      const respuesta = await eliminarMenu(men_id);
      return res.json({
        msg: `The menu with the id was removed: ${men_id}`,
        dato: [respuesta],
      });
    } catch (error) {
      return res.status(500).json({
        msg: `internal error`,
        error: `${error}`,
      });
    }
  };
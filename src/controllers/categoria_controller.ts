import { Request, Response } from "express";
import { getCategoriaActivas,getUnaCategoriaPorId,crearCategoria,actualizarCategoria,eliminarCategoria } from "../services/categoria_service";
import { CategoriaInterface } from "../interfaces/categoria_interface";

export const getAll = async (_req: Request, res: Response) => {
  try {
    const respuesta = await getCategoriaActivas();
    if (respuesta.length === 0) {
      return res.status(400).json({
        msg: `there are no active categories`,
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
    const { cat_id } = req.params;
    const respuesta = await getUnaCategoriaPorId(cat_id);
    if (!respuesta) {
      return res.status(400).json({
        msg: `the category was not found`,
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
    const peticion: CategoriaInterface = req.body;    
    const respuesta = await crearCategoria(peticion);    
    
    return res.json({
      msg: `A new category has been created`,
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
    const peticion: CategoriaInterface = req.body;
    const { cat_id } = req.params;
    const respuesta = await actualizarCategoria(cat_id,peticion);
    return res.json({
      msg: `Category has been updated`,
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
      const { cat_id } = req.params;
      const respuesta = await eliminarCategoria(cat_id);
      return res.json({
        msg: `The category with the id was removed: ${cat_id}`,
        dato: [respuesta],
      });
    } catch (error) {
      return res.status(500).json({
        msg: `internal error`,
        error: `${error}`,
      });
    }
  };
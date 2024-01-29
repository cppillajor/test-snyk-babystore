import { Request, Response } from "express";
import { getComprasActivas,getUnaCompraPorId,crearCompra,actualizarCompra,eliminarCompra } from "../services/compras_service";
import { ComprasInterface } from "../interfaces/compras_interface";

export const getAll = async (_req: Request, res: Response) => {
  try {
    const respuesta = await getComprasActivas();
    if (respuesta.length === 0) {
      return res.status(400).json({
        msg: `there are no active compras`,
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
    const { com_id } = req.params;
    const respuesta = await getUnaCompraPorId(com_id);
    if (!respuesta) {
      return res.status(400).json({
        msg: `the compras was not found`,
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
    const peticion: ComprasInterface = req.body;
    const respuesta = await crearCompra(peticion);    
    return res.json({
      msg: `A new compras has been created`,
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
    const peticion: ComprasInterface = req.body;
    const { com_id } = req.params;
    const respuesta = await actualizarCompra(com_id,peticion);
    return res.json({
      msg: `Compras has been updated`,
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
      const { com_id } = req.params;
      const respuesta = await eliminarCompra(com_id);
      return res.json({
        msg: `The compras with the id was removed: ${com_id}`,
        dato: [respuesta],
      });
    } catch (error) {
      return res.status(500).json({
        msg: `internal error`,
        error: `${error}`,
      });
    }
  };
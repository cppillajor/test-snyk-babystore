import { Request, Response } from "express";
import { getActiveVenta,getOneVentabyId,createVenta,updateVenta,removeVenta } from "../services/venta_service";
import { VentaInterface } from "../interfaces/venta_interface";


export const getAll = async (_req: Request, res: Response) => {
  try {
    const respuesta = await getActiveVenta();
    if (respuesta.length === 0) {
      return res.status(400).json({
        msg: `there are no active Venta`,
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
    const { ven_id } = req.params;
    const respuesta = await getOneVentabyId(ven_id);
    if (!respuesta) {
      return res.status(400).json({
        msg: `the Venta was not found`,
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
    const peticion: VentaInterface = req.body;
    const respuesta = await createVenta(peticion);    
    return res.json({
      msg: `A new Venta has been created`,
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
    const peticion: VentaInterface = req.body;
    const { ven_id } = req.params;
    const respuesta = await updateVenta(ven_id,peticion);
    return res.json({
      msg: `Venta has been updated`,
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
      const { ven_id } = req.params;
      const respuesta = await removeVenta(ven_id);
      return res.json({
        msg: `The Venta with the id was removed: ${ven_id}`,
        dato: [respuesta],
      });
    } catch (error) {
      return res.status(500).json({
        msg: `internal error`,
        error: `${error}`,
      });
    }
  };
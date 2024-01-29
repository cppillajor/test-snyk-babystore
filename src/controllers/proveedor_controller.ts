import { Request, Response } from "express";
import { getActiveProveedor,getOneProveedorbyId,createProveedor,updateProveedor,removeProveedor } from "../services/proveedor_service";
import { ProveedorInterface } from "../interfaces/proveedor_interface";


export const getAll = async (_req: Request, res: Response) => {
  try {
    const respuesta = await getActiveProveedor();
    if (respuesta.length === 0) {
      return res.status(400).json({
        msg: `there are no active Proveedor`,
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
    const { prov_id } = req.params;
    const respuesta = await getOneProveedorbyId(prov_id);
    if (!respuesta) {
      return res.status(400).json({
        msg: `the Proveedor was not found`,
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
    const peticion: ProveedorInterface = req.body;
    const respuesta = await createProveedor(peticion);    
    return res.json({
      msg: `A new Proveedor has been created`,
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
    const peticion: ProveedorInterface = req.body;
    const { prov_id } = req.params;
    const respuesta = await updateProveedor(prov_id,peticion);
    return res.json({
      msg: `Proveedor has been updated`,
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
      const { prov_id } = req.params;
      const respuesta = await removeProveedor(prov_id);
      return res.json({
        msg: `The Proveedor with the id was removed: ${prov_id}`,
        dato: [respuesta],
      });
    } catch (error) {
      return res.status(500).json({
        msg: `internal error`,
        error: `${error}`,
      });
    }
  };
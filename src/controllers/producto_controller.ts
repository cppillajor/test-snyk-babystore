import { Request, Response } from "express";
import { getActiveProducto,getOneProductobyId,createProducto,updateProducto,removeProducto } from "../services/producto_service";
import { ProductoInterface } from "../interfaces/producto_interface";


export const getAll = async (_req: Request, res: Response) => {
  try {
    const respuesta = await getActiveProducto();
    if (respuesta.length === 0) {
      return res.status(400).json({
        msg: `there are no active Producto`,
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
    const { pro_id } = req.params;
    const respuesta = await getOneProductobyId(pro_id);
    if (!respuesta) {
      return res.status(400).json({
        msg: `the Producto was not found`,
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
    
    if(req.body.pro_nombre === "" || req.body.pro_nombre === null || req.body.pro_nombre === undefined){
      return res.status(400).json({
        msg: `pro_nombre is required`,
      });
    }    
    if(req.body.pro_precio === "" || req.body.pro_precio === null || req.body.pro_precio === undefined && !Number.isFinite(req.body.pro_precio)){
      return res.status(400).json({
        msg: `pro_precio is required`,
      });
    }
    if(isNaN(req.body.pro_precio)){
      return res.status(400).json({
        msg: `pro_precio is not number`,
      });
    }
    if(req.body.pro_stock === "" || req.body.pro_stock === null || req.body.pro_stock === undefined){
      return res.status(400).json({
        msg: `pro_stock is required`,
      });
    }
    if(isNaN(req.body.pro_stock)){
      return res.status(400).json({
        msg: `pro_stock is not number`,
      });
    }
    if(req.body.pro_descripcion === "" || req.body.pro_descripcion === null || req.body.pro_descripcion === undefined){
      return res.status(400).json({
        msg: `pro_descripcion is required`,
      });
    }
    if(req.body.cat_id === "" || req.body.cat_id === null || req.body.cat_id === undefined){
      return res.status(400).json({
        msg: `cat_id is required`,
      });
    }
    if(isNaN(req.body.cat_id)){
      return res.status(400).json({
        msg: `cat_id is not number`,
      });
    }
    if(req.body.prov_id === "" || req.body.prov_id === null || req.body.prov_id === undefined){
      return res.status(400).json({
        msg: `prov_id is required`,
      });
    }
    if(isNaN(req.body.prov_id)){
      return res.status(400).json({
        msg: `prov_id is not number`,
      });
    }
    
    if(!req.file){
      return res.status(400).json({
        msg: `Fail to upload image`,
      });
    }
    
    const peticion: ProductoInterface = {	
      pro_nombre:req.body.pro_nombre,
      pro_stock:req.body.pro_stock,
      pro_descripcion:req.body.pro_descripcion,
      pro_imagen:req.file!.filename,
      cat_id:req.body.cat_id,
      prov_id:req.body.prov_id,
      pro_precio:req.body.pro_precio
    }    
    const respuesta = await createProducto(peticion);    
    return res.json({
      msg: `A new Producto has been created`,
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
    const peticion: ProductoInterface = req.body;
    const { pro_id } = req.params;
    const respuesta = await updateProducto(pro_id,peticion);
    return res.json({
      msg: `Producto has been updated`,
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
      const { pro_id } = req.params;
      const respuesta = await removeProducto(pro_id);
      return res.json({
        msg: `The Producto with the id was removed: ${pro_id}`,
        dato: [respuesta],
      });
    } catch (error) {
      return res.status(500).json({
        msg: `internal error`,
        error: `${error}`,
      });
    }
  };
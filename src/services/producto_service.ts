
import { ProductoInterface } from "../interfaces/producto_interface";
import CategoriaModel from "../models/categoria_model";
import ProductoModel from "../models/producto_model";
import ProveedorModel from "../models/proveedor";
import { isEmpty } from "../utils/utils";
export const getActiveProducto = async () => {
  const response = await ProductoModel.findAll({
    where: {
      pro_estado: true,
    },
    include:[CategoriaModel,ProveedorModel]
  });
  if (!response || response.length === 0) {
    throw new Error("There is no Producto");
  }

  return response;
};

export const getOneProductobyId = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  const response = await ProductoModel.findByPk(id,{include:[CategoriaModel,ProveedorModel]});
  if (!response) {
    throw new Error("Producto not founded");
  }
  return response;
};

export const createProducto = async (data: ProductoInterface) => {
  if (isEmpty(data)) {
    throw new Error("Data is required");
  }  
  const response = await ProductoModel.create({
    ...data,
  });
  if (!response) {
    throw new Error("Cannot create an Producto");
  }
  return response;
};

export const updateProducto = async (id: string, data: ProductoInterface) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  if (isEmpty(data)) {
    throw new Error("Data is required");
  } 

  const actualizar = await ProductoModel.update(
    { ...data}, { where: { pro_id: id } }
  );
  if (!actualizar) {
    throw new Error(`Producto with id: ${id} not founded`);
  }

  const response = await getOneProductobyId(id);
  return response;
};
export const removeProducto = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("Id is required");
  }
  const response = await ProductoModel.update(
    { pro_estado: "0" },
    { where: { pro_id: id } }
  );
  if (!response) {
    throw new Error(`Producto with id: ${id} not founded`);
  }
  return true;
};


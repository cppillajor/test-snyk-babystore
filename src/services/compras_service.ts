import { isEmpty } from "../utils/utils";
import CompasModel from "../models/compras_model";
import { ComprasInterface } from "../interfaces/compras_interface";
import ProductoModel from "../models/producto_model";
import ProveedorModel from "../models/proveedor";
import CategoriaModel from "../models/categoria_model";
import { updateProducto,getOneProductobyId } from "./producto_service";
import { ProductoInterface } from "../interfaces/producto_interface";

export const getComprasActivas = async () => {
  const response = await CompasModel.findAll({
    where: {
      com_estado: true,
    },
    include:[ProductoModel,ProveedorModel]
  });
  if (!response || response.length === 0) {
    throw new Error("There is no Compras");
  }
  return response;
};

export const getUnaCompraPorId = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  const response = await CompasModel.findByPk(id);
  if (!response) {
    throw new Error("Compras not founded");
  }
  return response;
};

export const crearCompra = async (data: ComprasInterface) => {
  if (isEmpty(data)) {
    throw new Error("Data is required");
  } 
  const result = await getOneProductobyId(data.pro_id!.toString())
  const total_stock=parseFloat(result.dataValues.pro_stock)+parseFloat(data.com_stock_compra!.toString())
  const producto_stock: ProductoInterface = {"pro_stock":total_stock}
  const result2 = await updateProducto(data.pro_id!.toString(),producto_stock)
  
  const response = await CompasModel.create({
    ...data,
  });
  if (!response) {
    throw new Error("Cannot create Compra");
  }
  return response;
};

export const actualizarCompra = async (id: string, data: ComprasInterface) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  if (isEmpty(data)) {
    throw new Error("Data is required");
  }  

  const actualizar = await CompasModel.update(
    { ...data},
    { where: { com_id: id } }
  );
  if (!actualizar) {
    throw new Error(`Compras with id: ${id} not founded`);
  }

  const response = await getUnaCompraPorId(id);
  return response;
};
export const eliminarCompra = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("Id is required");
  }
  const response = await CompasModel.update(
    { com_estado: "0" },
    { where: { com_id: id } }
  );
  if (!response) {
    throw new Error(`Compras with id: ${id} not founded`);
  }
  return true;
};


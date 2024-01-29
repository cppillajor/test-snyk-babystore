
import { ProveedorInterface } from "../interfaces/proveedor_interface";
import ProveedorModel from "../models/proveedor";
import { isEmpty } from "../utils/utils";
export const getActiveProveedor = async () => {
  const response = await ProveedorModel.findAll({
    where: {
      prov_estado: true,
    },
  });
  if (!response || response.length === 0) {
    throw new Error("There is no Proveedor");
  }
  return response;
};
export const getOneProveedorbyId = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  const response = await ProveedorModel.findByPk(id);
  if (!response) {
    throw new Error("Proveedor not founded");
  }
  return response;
};

export const createProveedor = async (data: ProveedorInterface) => {
  if (isEmpty(data)) {
    throw new Error("Data is required");
  }  
  const response = await ProveedorModel.create({
    ...data,
  });
  if (!response) {
    throw new Error("Cannot create an Proveedor");
  }
  return response;
};

export const updateProveedor = async (id: string, data: ProveedorInterface) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  if (isEmpty(data)) {
    throw new Error("Data is required");
  } 

  const actualizar = await ProveedorModel.update(
    { ...data}, { where: { prov_id: id } }
  );
  if (!actualizar) {
    throw new Error(`Proveedor with id: ${id} not founded`);
  }
  const response = await getOneProveedorbyId(id);
  return response;
};
export const removeProveedor = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("Id is required");
  }
  const response = await ProveedorModel.update(
    { prov_estado: "0" },{ where: { prov_id: id } }
  );
  if (!response) {
    throw new Error(`Proveedor with id: ${id} not founded`);
  }
  return true;
};


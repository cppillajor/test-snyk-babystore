
import { VentaInterface } from "../interfaces/venta_interface";
import VentaModel from "../models/venta_model";
import { isEmpty } from "../utils/utils";
export const getActiveVenta = async () => {
  const response = await VentaModel.findAll({
    where: {
      ven_estado: true,
    },
  });
  if (!response || response.length === 0) {
    throw new Error("There is no Venta");
  }
  return response;
};
export const getOneVentabyId = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  const response = await VentaModel.findByPk(id);
  if (!response) {
    throw new Error("Venta not founded");
  }
  return response;
};

export const createVenta = async (data: VentaInterface) => {
  if (isEmpty(data)) {
    throw new Error("Data is required");
  }  
  const response = await VentaModel.create({
    ...data,
  });
  if (!response) {
    throw new Error("Cannot create an Venta");
  }
  return response;
};

export const updateVenta = async (id: string, data: VentaInterface) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  if (isEmpty(data)) {
    throw new Error("Data is required");
  } 

  const actualizar = await VentaModel.update(
    { ...data}, { where: { ven_id: id } }
  );
  if (!actualizar) {
    throw new Error(`Venta with id: ${id} not founded`);
  }
  const response = await getOneVentabyId(id);
  return response;
};
export const removeVenta = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("Id is required");
  }
  const response = await VentaModel.update(
    { ven_estado: "0" },
    { where: { ven_id: id } }
  );
  if (!response) {
    throw new Error(`Venta with id: ${id} not founded`);
  }
  return true;
};


import { RolInterface } from "../interfaces/rol_interface";
import RolModel from "../models/rol_model";
import { isEmpty } from "../utils/utils";
export const getActiveRol = async () => {
  const response = await RolModel.findAll({
    where: {
      rol_estado: true,
    },
  });
  if (!response || response.length === 0) {
    throw new Error("There is no Rol");
  }
  return response;
};
export const getOneRolbyId = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  const response = await RolModel.findByPk(id);
  if (!response) {
    throw new Error("Rol not founded");
  }
  return response;
};

export const createRol = async (data: RolInterface) => {
  if (isEmpty(data)) {
    throw new Error("Data is required");
  }  
  const response = await RolModel.create({
    ...data,
  });
  if (!response) {
    throw new Error("Cannot create an Rol");
  }
  return response;
};

export const updateRol = async (id: string, data: RolInterface) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  if (isEmpty(data)) {
    throw new Error("Data is required");
  } 

  const actualizar = await RolModel.update(
    { ...data}, { where: { rol_id: id } }
  );
  if (!actualizar) {
    throw new Error(`Rol with id: ${id} not founded`);
  }
  const response = await getOneRolbyId(id);
  return response;
};
export const removeRol = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("Id is required");
  }
  const response = await RolModel.update(
    { rol_estado: "0" },
    { where: { rol_id: id } }
  );
  if (!response) {
    throw new Error(`Rol with id: ${id} not founded`);
  }
  return true;
};


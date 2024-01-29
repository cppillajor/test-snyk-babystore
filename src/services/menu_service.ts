import { menuInterface } from "../interfaces/menu_interface";
import MenuModel from "../models/menu_model";
import { isEmpty } from "../utils/utils";

export const getMenuActivas = async () => {
  const response = await MenuModel.findAll({
    where: {
      men_estado: true,
    },
  });
  if (!response || response.length === 0) {
    throw new Error("There is not data menu");
  }
  return response;
};

export const getUnaMenuPorId = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  const response = await MenuModel.findByPk(id);
  if (!response) {
    throw new Error("menu not founded");
  }
  return response;
};

export const crearMenu = async (data: menuInterface) => {
  if (isEmpty(data)) {
    throw new Error("Data is required");
  } 
  const response = await MenuModel.create({
    ...data,
  });
  if (!response) {
    throw new Error("Cannot create Menu");
  }
  return response;
};

export const actualizarMenu = async (id: string, data: menuInterface) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  if (isEmpty(data)) {
    throw new Error("Data is required");
  }  

  const actualizar = await MenuModel.update(
    { ...data},
    { where: { men_id: id } }
  );
  if (!actualizar) {
    throw new Error(`menu with id: ${id} not founded`);
  }

  const response = await getUnaMenuPorId(id);
  return response;
};
export const eliminarMenu = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("Id is required");
  }
  const response = await MenuModel.update(
    { menu_estado: "0" },
    { where: { menu_id: id } }
  );
  if (!response) {
    throw new Error(`menu with id: ${id} not founded`);
  }
  return true;
};


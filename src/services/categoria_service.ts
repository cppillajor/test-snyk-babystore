import { isEmpty } from "../utils/utils";
import CategoriaModel from "../models/categoria_model";
import { CategoriaInterface } from "../interfaces/categoria_interface";

export const getCategoriaActivas = async () => {
  const response = await CategoriaModel.findAll({
    where: {
      cat_estado: true,
    },
  });
  if (!response || response.length === 0) {
    throw new Error("There is no Categoria");
  }
  return response;
};

export const getUnaCategoriaPorId = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  const response = await CategoriaModel.findByPk(id);
  if (!response) {
    throw new Error("Categoria not founded");
  }
  return response;
};

export const crearCategoria = async (data: CategoriaInterface) => {  
  if (isEmpty(data)) {
    throw new Error("Data is required");
  }
  const findExist = await CategoriaModel.findOne({
    where: {
      cat_nombre: data.cat_nombre,
    },
  });
  
  if (findExist) {
    throw new Error("Categoria already exist");
  }  
  const response = await CategoriaModel.create({
    ...data,
  });
  if (!response) {
    throw new Error("Cannot create Categoria");
  }
  return response;
};

export const actualizarCategoria = async (id: string, data: CategoriaInterface) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  if (isEmpty(data)) {
    throw new Error("Data is required");
  }  

  const actualizar = await CategoriaModel.update(
    { ...data},
    { where: { cat_id: id } }
  );
  if (!actualizar) {
    throw new Error(`Categoria with id: ${id} not founded`);
  }

  const response = await getUnaCategoriaPorId(id);
  return response;
};
export const eliminarCategoria = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("Id is required");
  }
  const response = await CategoriaModel.update(
    { cat_estado: "0" },
    { where: { cat_id: id } }
  );
  if (!response) {
    throw new Error(`Categoria with id: ${id} not founded`);
  }
  return true;
};


import bcrypt from "bcrypt";
import PersonaModel from "../models/persona_model";
import { isEmpty } from "../utils/utils";
import { PersonaInterface } from "../interfaces/persona_interface";
import RolModel from "../models/rol_model";

export const getPersonasActivas = async () => {
  const response = await PersonaModel.findAll({
    where: {
      per_estado: true,
      
    },
    include: RolModel
  });
  if (!response || response.length === 0) {
    throw new Error("There is no Users");
  }

  return response;
};

export const getUnaPersonaPorId = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  const response = await PersonaModel.findByPk(id,{ include: RolModel });
  if (!response) {
    throw new Error("User not founded");
  }
  return response;
};

export const crearPersona = async (data: PersonaInterface) => {
  if (isEmpty(data)) {
    throw new Error("Data is required");
  }
  const findExist = await PersonaModel.findOne({
    where: {
      per_correo: data.per_correo,
    },
  });
  if (findExist) {
    throw new Error("User already exist");
  }
  const hashPassword = bcrypt.hashSync(data.per_clave!, 10);
  const response = await PersonaModel.create({
    ...data,
    per_clave: hashPassword,
  });
  if (!response) {
    throw new Error("Cannot create an Usuario");
  }
  return response;
};

export const actualizarPersona = async (id: string, data: PersonaInterface) => {
  if (isEmpty(id)) {
    throw new Error("ID is required");
  }
  if (isEmpty(data)) {
    throw new Error("Data is required");
  }

  if (!data.per_clave) {
    const actualizar = await PersonaModel.update(
      { ...data },
      {
        where: {
          per_id: id,
        },
      }
    );
    if (!actualizar) {
      throw new Error(`usuario con el id: ${id} no encontrado`);
    }
    const response = await getUnaPersonaPorId(id);
    return response;
  }

  const hashPassword = bcrypt.hashSync(data.per_clave!, 10);

  const actualizar = await PersonaModel.update(
    { ...data, per_clave: hashPassword },
    { where: { per_id: id } }
  );
  if (!actualizar) {
    throw new Error(`usuario con el id: ${id} no encontrado`);
  }

  const response = await getUnaPersonaPorId(id);
  return response;
};
export const eliminarPersona = async (id: string) => {
  if (isEmpty(id)) {
    throw new Error("Id is required");
  }

  const response = await PersonaModel.update(
    { per_estado: "0" },
    { where: { per_id: id } }
  );

  if (!response) {
    throw new Error(`User with id: ${id} not founded`);
  }

  return true;
};
/* metodo para eliminar definitivamente de la base de datos
export const deleteUser = async (id: string) => {
	if (isEmpty(id)) {
		throw new Error('Id is required');
	}

	const response = await UsersModel.destroy({ where: { USER_ID: id } });

	if (!response) {
		throw new Error(`User with id: ${id} not founded`);
	}

	return response;
};
*/

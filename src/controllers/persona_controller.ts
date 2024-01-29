import { Request, Response } from "express";
import { PersonaInterface } from "../interfaces/persona_interface";
import { getPersonasActivas,getUnaPersonaPorId,crearPersona,actualizarPersona,eliminarPersona } from "../services/persona_service";

export const getAll = async (_req: Request, res: Response) => {
  try {
    const respuesta = await getPersonasActivas();
    if (respuesta.length === 0) {
      return res.status(400).json({
        msg: `no existen personas activas`,
      });
    }
    return res.json({
      msg: `Lista de datos`,
      dato: respuesta,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `error interno`,
      error: `${error}`,
    });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const { per_id } = req.params;
    const respuesta = await getUnaPersonaPorId(per_id);
    if (!respuesta) {
      return res.status(400).json({
        msg: `no se encontro a la persona`,
      });
    }
    return res.json({
      msg: `Lista de datos`,
      dato: [respuesta],
    });
  } catch (error) {
    return res.status(500).json({
      msg: `error interno`,
      error: `${error}`,
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const peticion: PersonaInterface = req.body;
    const respuesta = await crearPersona(peticion);    
    return res.json({
      msg: `Se ha creado una nueva Persona`,
      dato: [respuesta],
    });
  } catch (error) {
    return res.status(500).json({
      msg: `error interno`,
      error: `${error}`,
    });
  }
};
export const update = async (req: Request, res: Response) => {
  try {
    const peticion: PersonaInterface = req.body;
    const { per_id } = req.params;
    const respuesta = await actualizarPersona(per_id,peticion);
    return res.json({
      msg: `Se ha actualizado una persona`,
      dato: [respuesta],
    });
  } catch (error) {
    return res.status(500).json({
      msg: `error interno`,
      error: `${error}`,
    });
  }
};

export const remove = async (req: Request, res: Response) => {
    try {      
      const { per_id } = req.params;
      const respuesta = await eliminarPersona(per_id);
      return res.json({
        msg: `Se elimino a la persona con el id: ${per_id}`,
        dato: [respuesta],
      });
    } catch (error) {
      return res.status(500).json({
        msg: `error interno`,
        error: `${error}`,
      });
    }
  };
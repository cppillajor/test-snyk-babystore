import bcrypt from "bcrypt";
import PersonaModel from "../models/persona_model";
import { isEmpty } from "../utils/utils";
import { LoginInterface } from "../interfaces/login_interface";
import { createToken } from "../helpers/tockens_helpers";

export const login = async (data: LoginInterface) => {
	if (isEmpty(data)) {
		throw new Error('Data are required');
	}

	const findedUser = await PersonaModel.findOne({
		where: { per_correo: data.per_correo, per_estado:"1" },
	});

    if(!findedUser){
        throw new Error('User not founded');
    }
    const isCorrectPass: boolean = await bcrypt.compare(data.per_clave!, findedUser.dataValues.per_clave);

    if(!isCorrectPass){
        throw new Error('Invalid Password');
    }

    const token = await createToken(findedUser.dataValues.per_id);
    return {token, user: findedUser};
};

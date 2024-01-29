import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../helpers/tockens_helpers';
import { getUnaPersonaPorId } from '../services/persona_service';

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let authHeader = req.header('Authorization');
	
	if (authHeader) {
		authHeader =
			req.header('Authorization')?.split(';')[0].split('=')[1] ||
			req.header('Authorization')?.split('Bearer ')[1] ||
			'';
		// req.cookies['Authorization'] = authHeader;
	}
	
	try {
		// const Authorization = req.cookies['Authorization'] ? authHeader : null;
		const Authorization = authHeader;
		
		if (!Authorization) {
			return res.status(404).json({
				msg: 'NO hay token de Autenticacion',
			});
		}

		const PersonaId = verifyToken(Authorization);
		//@ts-ignore
		const findUser = await getUnaPersonaPorId(PersonaId.id);

		if (!findUser) {
			return res.status(401).json({
				msg: 'token de autenticacion invalido',
			});
		}
		//@ts-ignore
		req.user = findUser.dataValues;
		next();
        return Promise.resolve(); 
	} catch (error) {
		return res.status(401).json({
			msg: 'token de autenticacion invalido',
		});
	}
};

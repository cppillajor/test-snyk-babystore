import jwt from 'jsonwebtoken';
import { secretKeyJWT } from "../config/environment_config";


export const createToken = (data: any) => {   
    return new Promise( (resolve, reject) => {
        const payload = { id: data };
        const key = secretKeyJWT;
        jwt.sign(
            payload,
            key,
            { expiresIn: '1d' },
            (err, token) => {
                if(err){
                    console.log(err);
                    reject('Cannot resolve token');
                }else{
                    resolve(token);
                } 
            }
        )
    })
}

export const verifyToken = (token: string, ignoreExpiration = false ) => {
    return jwt.verify(token, secretKeyJWT, { ignoreExpiration });
}
import { Request, Response } from "express";
import { LoginInterface } from "../interfaces/login_interface";
import { login } from "../services/auth_service";

export const postLogin = async (req: Request, res: Response) => {
  try {
    const data: LoginInterface = req.body;
    const { token, user } = await login(data);
    return res.json({
      msg: "login correcto",
      user,
      token,
    });
  } catch (error) {
    return res.status(400).json({
      msg: `${error}`,
    });
  }
};

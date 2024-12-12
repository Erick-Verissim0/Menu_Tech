import { Request, Response } from 'express';
import { loginUser } from '../../useCases/users/loginUser';

export async function loginUserController(req: Request, res: Response) {
  try {
    await loginUser(req, res);
  } catch (error) {
    console.log(`Ouve algum erro ao criar um usuário. O erro: ${error}`);
    res.sendStatus(500);
  }
}

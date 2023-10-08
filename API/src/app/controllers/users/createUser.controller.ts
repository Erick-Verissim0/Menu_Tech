import { Request, Response } from "express";
import { createUser } from "../../useCases/users/loginUser";

export async function createUserController(req: Request, res: Response) {
  try {
    await createUser(req, res);
  } catch (error) {
    console.log(`Ouve algum erro ao criar um usuário. O erro: ${error}`);
    res.sendStatus(500);
  }
}
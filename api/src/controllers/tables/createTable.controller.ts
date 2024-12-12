import { Request, Response } from 'express';
import { createTable } from '../../useCases/tables/createTable';

export async function createTableController(req: Request, res: Response) {
  try {
    await createTable(req, res);
  } catch (error) {
    console.log(`Ouve algum erro ao criar uma mesa. O erro: ${error}`);
    res.sendStatus(500);
  }
}

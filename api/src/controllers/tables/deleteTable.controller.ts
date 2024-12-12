import { Request, Response } from 'express';
import { deleteTable } from '../../useCases/tables/deleteTable';

export async function deleteTableController(req: Request, res: Response) {
  try {
    await deleteTable(req, res);
  } catch (error) {
    console.log(`Ouve algum erro ao deletar a mesa. O erro: ${error}`);
    res.sendStatus(500);
  }
}

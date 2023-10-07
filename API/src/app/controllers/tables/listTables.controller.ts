import { Request, Response } from "express";
import { listTables } from "../../useCases/tables/listTables";

export async function listTablesController(req: Request, res: Response) {
  try {
    await listTables(req, res);
  } catch (error) {
    console.log(`Ouve algum erro ao ver todas as mesas. O erro: ${error}`);
    res.sendStatus(500);
  }
}
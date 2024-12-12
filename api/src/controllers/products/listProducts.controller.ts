import { Request, Response } from 'express';
import { listProducts } from '../../useCases/products/listProducts';

export async function listProductsController(req: Request, res: Response) {
  try {
    await listProducts(req, res);
  } catch (error) {
    console.log(`Ouve algum erro ao ver todos os produtos. O erro: ${error}`);
    res.sendStatus(500);
  }
}

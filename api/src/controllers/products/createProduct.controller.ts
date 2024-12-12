import { Request, Response } from 'express';
import { createProduct } from '../../useCases/products/createProduct';

export async function createProductController(req: Request, res: Response) {
  try {
    await createProduct(req, res);
  } catch (error) {
    console.log(`Ouve algum erro ao criar um produto. O erro: ${error}`);
    res.sendStatus(500);
  }
}

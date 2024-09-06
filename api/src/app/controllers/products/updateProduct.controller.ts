import { Request, Response } from 'express';
import { updateProduct } from '../../useCases/products/updateProduct';

export async function updateProductController(req: Request, res: Response) {
  try {
    await updateProduct(req, res);
  } catch (error) {
    console.log(`Ouve algum erro ao atualizar um produto. O erro: ${error}`);
    res.sendStatus(500);
  }
}

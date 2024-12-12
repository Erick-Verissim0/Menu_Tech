import { Request, Response } from 'express';
import { updateOrderById } from '../../useCases/orders/updateOrderById'; 

export async function updateOrdersByIdController(req: Request, res: Response) {
  try {
    await updateOrderById(req, res);
  } catch (error) {
    console.log(`Ouve algum erro atualizar o pedido. O erro: ${error}`);
    res.sendStatus(500);
  }
}

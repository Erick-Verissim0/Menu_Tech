import { Request, Response } from 'express';
import { createOrder } from '../../useCases/orders/createOrder';

export async function createOrdersController(req: Request, res: Response) {
  try {
    await createOrder(req, res);
  } catch (error) {
    console.log(`Ouve algum erro ao criar um pedido. O erro: ${error}`);
    res.sendStatus(500);
  }
}

import { Request, Response } from 'express';
import { listOrders } from '../../useCases/orders/listOrders'; 

export async function listOrdersController(req: Request, res: Response) {
  try {
    await listOrders(req, res);
  } catch (error) {
    console.log(`Ouve algum erro ao ver todos os pedidos. O erro: ${error}`);
    res.sendStatus(500);
  }
}

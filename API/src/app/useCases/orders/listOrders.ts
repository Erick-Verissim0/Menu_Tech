import { Request, Response } from 'express';
import { MysqlConnection } from '../../..';

export async function listOrders(req: Request, res: Response) {
  try {
    const connection = await MysqlConnection();

    const [rows, fields] = await connection.execute(
      'SELECT orders.id, orders.table_id, products.name AS product_name, orders.total_value, orders.created_at FROM orders INNER JOIN products ON orders.product_id = products.id',
    );

    const orders = rows;

    connection.end();

    res.status(201).json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

import { Request, Response } from 'express';
import { MysqlConnection } from '../..';

export async function listOrders(req: Request, res: Response) {
  try {
    const connection = await MysqlConnection();

    const [rows] = await connection.execute(
      `SELECT 
         orders.id, 
         orders.table_id, 
         orders.total_value, 
         orders.created_at, 
         JSON_ARRAYAGG(JSON_OBJECT(
           'product_id', products.id, 
           'product_name', products.name
         )) AS products 
       FROM orders
       INNER JOIN order_products ON orders.id = order_products.order_id
       INNER JOIN products ON order_products.product_id = products.id
       WHERE orders.deleted_at IS NULL
       GROUP BY orders.id`
    );

    connection.end();

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

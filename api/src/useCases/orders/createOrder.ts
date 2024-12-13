import { Request, Response } from 'express';
import { MysqlConnection } from '../..';

export async function createOrder(req: Request, res: Response) {
  const connection = await MysqlConnection();
  
  try {

    const { table_id, products, total_value } = req.body;

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ error: 'Products must be a non-empty array.' });
    }

    await connection.beginTransaction();

    const orderSql = 'INSERT INTO orders (table_id, total_value) VALUES (?, ?)';
    const [orderResult]: any = await connection.execute(orderSql, [table_id, total_value]);

    const orderId = orderResult.insertId;

    const productSql = 'INSERT INTO order_products (order_id, product_id) VALUES ?';
    const productValues = products.map((productId: number) => [orderId, productId]);

    await connection.query(productSql, [productValues]);

    await connection.commit();

    connection.end();

    res.status(201).json({ orderId });
  } catch (error) {
    if (connection) {
      await connection.rollback();
    }

    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

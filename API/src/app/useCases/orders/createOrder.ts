import { Request, Response } from 'express';
import { MysqlConnection } from '../../..';

export async function createOrder(req: Request, res: Response) {
  try {
    const connection = await MysqlConnection();

    const { table_id, product_id, total_value } = req.body;

    const sql = 'INSERT INTO orders (table_id, product_id, total_value) VALUES (?, ?, ?)';

    const inputValues = [table_id, product_id, total_value];

    const [result] = await connection.execute(sql, inputValues);

    connection.end();

    res.status(201).end();
  } catch (error) {
    res.sendStatus(500);

    console.log(error);
  }
}

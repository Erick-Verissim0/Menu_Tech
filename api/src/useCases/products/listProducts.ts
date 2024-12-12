import { Request, Response } from 'express';
import { MysqlConnection } from '../..';

export async function listProducts(req: Request, res: Response) {
  try {
    const connection = await MysqlConnection();

    const [rows, fields] = await connection.execute('SELECT * FROM products');

    const products = rows;

    connection.end();

    res.json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

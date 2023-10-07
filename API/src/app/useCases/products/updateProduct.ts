import { Request, Response } from 'express';
import { MysqlConnection } from '../../..';

export async function updateProduct(req: Request, res: Response) {
  try {
    const connection = await MysqlConnection();

    const { id } = req.params;
    const { name, value } = req.body;

    let sql = 'UPDATE products SET ';
    const inputValues: any[] = [];

    if (typeof name === 'string') {
      sql += 'name = ?, ';
      inputValues.push(name);
    }

    if (typeof value === 'number') {
      sql += 'value = ?, ';
      inputValues.push(value);
    }

    sql = sql.replace(/, $/, '');

    sql += ' WHERE id = ?';
    inputValues.push(id);

    const [result] = await connection.execute(sql, inputValues);

    connection.end();

    res.status(204).end();
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
}

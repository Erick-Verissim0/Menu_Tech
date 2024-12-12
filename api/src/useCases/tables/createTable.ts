import { Request, Response } from 'express';
import { MysqlConnection } from '../..';

export async function createTable(req: Request, res: Response) {
  try {
    const connection = await MysqlConnection();

    const { table_number } = req.body;

    const sql = 'INSERT INTO tables (table_number) VALUES (?)';
    const inputValues = [table_number];

    const [result] = await connection.execute(sql, inputValues);

    connection.end();

    res.status(201).end();
  } catch (error) {
    console.log(`Ouve algum erro ao criar uma mesa. o erro: ${error}`);
  }
}

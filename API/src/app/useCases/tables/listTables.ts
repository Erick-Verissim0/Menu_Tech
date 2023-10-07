import { Request, Response } from 'express';
import { MysqlConnection } from '../../..';

export async function listTables(req: Request, res: Response) {
  try {
    const connection = await MysqlConnection();

    const [rows, fields] = await connection.execute('SELECT * FROM tables ORDER BY table_number ASC');

    connection.end();

    res.status(201).json(rows);
  } catch (error) {
    res.status(404).end();
    console.log(`Houve algum erro ao buscar todas as mesas. O erro: ${error}`);
  }
}

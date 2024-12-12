import { Request, Response } from 'express';
import { MysqlConnection } from '../..';

export async function deleteTable(req: Request, res: Response) {
  try {
    const connection = await MysqlConnection();

    const { id } = req.params;

    const sql = 'DELETE FROM tables WHERE id = ?';

    const inputValues = [id];

    const [result] = await connection.execute(sql, inputValues);

    connection.end();

    res.status(204).end();
  } catch (error) {
    res.status(500).end();
    console.log(`Houve algum erro ao apagar a mesa. O erro: ${error}`);
  }
}

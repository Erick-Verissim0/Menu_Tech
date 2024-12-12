import { Request, Response } from 'express';
import { MysqlConnection } from '../..';

export async function updateOrderById(req: Request, res: Response) {
  try {
    const connection = await MysqlConnection();

    const { id } = req.params;
    const { table_id, product_id, total_value, deleted_at } = req.body;

    if (!Array.isArray(product_id)) {
      return res.status(400).json({ message: 'O campo product_id deve ser um array' });
    }

    let sql = 'UPDATE orders SET ';
    const inputValues: any[] = [];

    if (typeof table_id === 'number') {
      sql += 'table_id = ?, ';
      inputValues.push(table_id);
    }

    if (typeof total_value === 'number') {
      sql += 'total_value = ?, ';
      inputValues.push(total_value);
    }

    if (deleted_at === true) {
      sql += 'deleted_at = CURRENT_TIMESTAMP, ';
    }

    sql = sql.replace(/, $/, '');
    sql += ' WHERE id = ?';
    inputValues.push(id);

    const [result] = await connection.execute(sql, inputValues);

    if ((result as any).affectedRows === 0) {
      connection.end();
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }

    await connection.execute('DELETE FROM order_products WHERE order_id = ?', [id]);

    if (product_id.length > 0) {
      const insertValues: any[] = [];
      const placeholders = product_id
        .map(() => '(?, ?)')
        .join(', ');

      product_id.forEach((pid: number) => {
        insertValues.push(id, pid);
      });

      const insertSQL = `INSERT INTO order_products (order_id, product_id) VALUES ${placeholders}`;
      await connection.execute(insertSQL, insertValues);
    }

    connection.end();

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

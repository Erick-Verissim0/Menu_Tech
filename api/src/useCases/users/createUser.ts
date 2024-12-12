import * as bcrypt from 'bcrypt';

import { Request, Response } from 'express';
import { MysqlConnection } from '../..';

export async function createUser(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const connection = await MysqlConnection();

    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const inputValues = [name, email, hashedPassword];

    await connection.execute(sql, inputValues);
    connection.end();

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao registrar o usuário' });
  }
}

import * as bcrypt from 'bcrypt';

import { Request, Response } from 'express';
import { MysqlConnection } from '../../..';

export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const connection = await MysqlConnection();

    const sql = 'SELECT * FROM users WHERE email = ?';
    const [userRows] = await connection.execute(sql, [email]);

    /* if (Array.isArray(userRows) && userRows.length > 0) {
      res.status(401).json({ error: 'Usuário não encontrado' });
      return;
    } */

    const user = userRows[0];

    const hashedPassword = user.password;

    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    if (isPasswordValid) {
      res.status(201).json(user);
      return user;
    } else {
      res.status(401).json({ error: 'Senha incorreta' });
    }

    connection.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao logar o usuário' });
  }
}

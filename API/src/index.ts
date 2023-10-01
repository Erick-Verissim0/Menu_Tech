import express from 'express';
import path from 'node:path';
import * as mysql from 'mysql2/promise';

import { router } from './router';

import { database } from '../database/index.ts';
import { MysqlUsers } from '../database/models/users';
import { MysqlTables } from '../database/models/tables';
import { MysqlProducts } from '../database/models/products';
import { MysqlRequests } from '../database/models/requests';

export async function MysqlConnection() {
  const connection: mysql.Connection = await mysql.createConnection(database);

  return connection;
}

async function main() {
  try {
    const connection = await MysqlConnection();

    await connection.execute(MysqlUsers);
    await connection.execute(MysqlTables);
    await connection.execute(MysqlProducts);
    await connection.execute(MysqlRequests);

    const app = express();
    const port = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running in port ${port}`);
    });
  } catch (error) {
    console.error(`Erro: ${error}`);
  }
}

main();

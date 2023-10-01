import express from 'express';
import path from 'node:path';
import * as mysql from 'mysql2/promise';

import { router } from './router';

import { database } from '../database/index.ts';
import { MysqlUsers } from '../database/models/users';
import { MysqlTables } from '../database/models/tables';
import { MysqlProducts } from '../database/models/products';
import { MysqlOrders } from '../database/models/orders';

export async function MysqlConnection() {
  try {
    const connection: mysql.Connection = await mysql.createConnection(database);

    return connection;
  } catch (error) {
    const createDatabaseConfig = {
      host: 'localhost',
      user: 'root',
      password: 'root',
    };

    const createConnection = await mysql.createConnection(createDatabaseConfig);

    await createConnection.query(`CREATE DATABASE IF NOT EXISTS ${database.database}`);
    console.log(`Banco de dados '${database.database}' criado com sucesso.`);

    const retryConnection = await mysql.createConnection(database);
    return retryConnection;
  }
}

async function main() {
  try {
    const connection = await MysqlConnection();

    await connection.execute(MysqlUsers);
    await connection.execute(MysqlTables);
    await connection.execute(MysqlProducts);
    await connection.execute(MysqlOrders);

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

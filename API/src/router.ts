import { Router } from 'express';

import { createTableController } from './app/controllers/tables/createTable.controller';
import { listTablesController } from './app/controllers/tables/listTables.controller';
import { deleteTableController } from './app/controllers/tables/deleteTable.controller';
import { listProductsController } from './app/controllers/products/listProducts.controller';
import { createProductController } from './app/controllers/products/createProduct.controller';
import { updateProductController } from './app/controllers/products/updateProduct.controller';
import { listOrdersController } from './app/controllers/orders/listOrders.controller';
import { createOrdersController } from './app/controllers/orders/createOrder.controller';

export const router = Router();

router.get('/products', listProductsController);

router.post('/product', createProductController);

router.patch('/product/:id', updateProductController);

router.get('/tables', listTablesController);

router.post('/table', createTableController);

router.delete('/table/:id', deleteTableController);

router.get('/orders', listOrdersController);

router.post('/order', createOrdersController);

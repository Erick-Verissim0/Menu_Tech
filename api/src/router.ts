import { Router } from 'express';
import { createUserController } from './controllers/users/createUser.controller';
import { loginUserController } from './controllers/users/loginUser.controller';
import { listProductsController } from './controllers/products/listProducts.controller';
import { createProductController } from './controllers/products/createProduct.controller';
import { updateProductController } from './controllers/products/updateProduct.controller';
import { listTablesController } from './controllers/tables/listTables.controller';
import { createTableController } from './controllers/tables/createTable.controller';
import { deleteTableController } from './controllers/tables/deleteTable.controller';
import { listOrdersController } from './controllers/orders/listOrders.controller';
import { createOrdersController } from './controllers/orders/createOrder.controller';
import { updateOrdersByIdController } from './controllers/orders/updateOrderById.controller';

export const router = Router();
router.post('/user/create', createUserController);

router.post('/user/login', loginUserController);

router.get('/products', listProductsController);

router.post('/product', createProductController);

router.patch('/product/:id', updateProductController);

router.get('/tables', listTablesController);

router.post('/table', createTableController);

router.delete('/table/:id', deleteTableController);

router.post('/order', createOrdersController);

router.get('/orders', listOrdersController);

router.put('/order/update/:id', updateOrdersByIdController)

// router.get('/order/id/:orderId', listOrderByIdController)

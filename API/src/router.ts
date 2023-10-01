import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

/* import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategory';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory'; */
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';

export const router = Router();

/* const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
}); */

/* router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/categories/:categoryId/products', listProductsByCategory); */

router.get('/products', listProducts);

router.post('/products', /* upload.single('image'), */ createProduct);

router.get('/orders', listOrders);

router.post('/orders', createOrder);

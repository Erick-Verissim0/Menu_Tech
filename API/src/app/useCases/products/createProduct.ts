import { Request, Response } from 'express';
import { MysqlConnection } from '../../..';

export async function createProduct(req: Request, res: Response) {
  try {
    const connection = await MysqlConnection();

    const { name, value /* , description, price, category, ingredients */ } = req.body;

    const sql = 'INSERT INTO products (name, value) VALUES (?, ?)';
    const inputValues = [name, value];

    const [result] = await connection.execute(sql, inputValues);

    // const imagePath = req.file?.filename;

    /* const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    }); */

    connection.end();

    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

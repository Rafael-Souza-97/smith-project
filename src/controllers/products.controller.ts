import { Request, Response } from 'express';
import productsService from '../services/products.service';

const getAllProducts = async (_req: Request, res: Response):Promise<void> => {
  const products = await productsService.getAllProducts();

  res.status(200).json(products);
};

const createProducts = async (req: Request, res: Response):Promise<void> => {
  const createdProduct = await productsService.createProducts(req.body);

  res.status(201).json(createdProduct);
};

export default {
  getAllProducts,
  createProducts,
};

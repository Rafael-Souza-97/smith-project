import { Request, Response } from 'express';
import productsService from '../services/products.service';

const getAllProducts = async (_req: Request, res: Response):Promise<void> => {
  const products = await productsService.getAllProducts();

  res.status(200).json(products);
};

export default {
  getAllProducts,
};

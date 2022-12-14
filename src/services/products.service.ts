import productsModel from '../models/products.model';
import { TProduct } from '../types/products.types';

const getAllProducts = async ():Promise<TProduct[]> => {
  const products = await productsModel.getAllProducts();

  return products;
};

export default {
  getAllProducts,
};

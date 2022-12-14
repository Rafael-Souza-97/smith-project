import productsModel from '../models/products.model';
import { NewProduct, TProduct } from '../types/products.types';

const getAllProducts = async ():Promise<TProduct[]> => {
  const allProducts = await productsModel.getAllProducts();

  return allProducts;
};

const createProducts = async (product: NewProduct):Promise<NewProduct> => {
  const productCreated = await productsModel.createProducts(product);
  
  return productCreated;
};

export default {
  getAllProducts,
  createProducts,
};

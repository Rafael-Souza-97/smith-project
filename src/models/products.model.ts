import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { NewProduct, TProduct } from '../types/products.types';

const getAllProducts = async (): Promise<TProduct[]> => {
  const [allProducts] = await connection
    .execute<RowDataPacket[] & TProduct[]>('SELECT * FROM Trybesmith.products;');

  return allProducts;
};

const createProducts = async (product: NewProduct): Promise<NewProduct> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)',
    [product.name, product.amount],
  );

  return { id: insertId, name: product.name, amount: product.amount };
};

export default {
  getAllProducts,
  createProducts,
};

import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { TProduct } from '../types/products.types';

const getAllProducts = async (): Promise<TProduct[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & TProduct[]>('SELECT * FROM Trybesmith.products;');

  return products;
};

export default {
  getAllProducts,
};

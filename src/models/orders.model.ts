import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { TOrders } from '../types/orders.type';

const getAllOrders = async (): Promise<TOrders[]> => {
  const [allOrders] = await connection
    .execute<RowDataPacket[] & TOrders[]>(
    `SELECT ord.id, ord.user_id AS userId, JSON_ARRAYAGG(pr.id) AS productsIds
    FROM Trybesmith.orders as ord
    INNER JOIN Trybesmith.products AS pr
    WHERE ord.id = pr.order_id
    GROUP BY ord.id;`,
  );

  return allOrders;
};

const addNewOrders = async (userId: number, productsIds: number[]) => {
  const insertUserId = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const mapProductsIds = `UPDATE Trybesmith.products
  SET order_id = ?
  WHERE id = ?;`;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(insertUserId, [userId]);

  await Promise.all(productsIds.map(async (productId) => {
    await connection.execute<ResultSetHeader>(mapProductsIds, [insertId, productId]);
  }));
};

export default {
  getAllOrders,
  addNewOrders,
};

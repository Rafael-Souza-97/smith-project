import { RowDataPacket } from 'mysql2';
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

export default {
  getAllOrders,
};

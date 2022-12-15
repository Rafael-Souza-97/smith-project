import ordersModel from '../models/orders.model';
import { TOrders } from '../types/orders.type';

const getAllOrders = async ():Promise<TOrders[]> => {
  const allOrders = await ordersModel.getAllOrders();

  return allOrders;
};

export default {
  getAllOrders,
};

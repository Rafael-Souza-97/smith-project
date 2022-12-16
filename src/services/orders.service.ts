import ordersModel from '../models/orders.model';
import { TOrders } from '../types/orders.type';

const getAllOrders = async ():Promise<TOrders[]> => {
  const allOrders = await ordersModel.getAllOrders();

  return allOrders;
};

const addNewOrders = async (userId: number, productsIds: number[]) => {
  await ordersModel.addNewOrders(userId, productsIds);

  return { userId, productsIds };
};

export default {
  getAllOrders,
  addNewOrders,
};

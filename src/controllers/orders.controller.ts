import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const getAllOrders = async (_req: Request, res: Response):Promise<void> => {
  const orders = await ordersService.getAllOrders();

  res.status(200).json(orders);
};

export default {
  getAllOrders,
};

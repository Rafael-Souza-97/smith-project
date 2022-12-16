import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import userIdValidation from '../middlewares/orders/userIdValidation.middleware';

const getAllOrders = async (_req: Request, res: Response):Promise<void> => {
  const orders = await ordersService.getAllOrders();

  res.status(200).json(orders);
};

const addNewOrders = async (req: Request, res: Response):Promise<void> => {
  const { productsIds } = req.body;
  const { authorization } = req.headers;

  const user = userIdValidation(authorization as string);
  const userId = user.id;

  const newOrder = await ordersService.addNewOrders(userId, productsIds);

  res.status(201).json(newOrder);
};

export default {
  getAllOrders,
  addNewOrders,
};

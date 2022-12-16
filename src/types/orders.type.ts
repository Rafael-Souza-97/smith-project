export interface TOrders {
  id: number,
  userId: string,
  productsIds: number[],
}

export interface TPostOrders {
  userId: number,
  productsIds: number[],
}

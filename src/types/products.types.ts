export interface NewProduct {
  id?: number;
  name: string,
  amount: string,
}

export interface TProduct {
  id: number,
  name: string,
  amount: string,
  orderId?: number | null,
}

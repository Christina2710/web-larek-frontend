import { IProduct } from "./product"

export interface ICartItem {
  productId: IProduct["id"];
  quantity: number;
}

export interface ICart {
  total: number;
  items: ICartItem[];
}

import { IProduct } from "./product"

export interface ICart {
  total: number;
  items: IProduct[];
}

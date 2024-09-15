import { IProduct } from "./IProduct";

export interface ICart {
    products: IProduct[];
    quantity: number;
}
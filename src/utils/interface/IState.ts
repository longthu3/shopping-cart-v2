import { IProduct } from "./IProduct";

export interface InitialState {
    count: number;
    number: number;
    listProduct: IProduct[];
    cart: IProduct[];
}
import { ActionTypes } from "./enum/EAction";
import { IProduct } from "./IProduct";

export interface CountAction {
    type: ActionTypes.COUNT;
    payload: number
}

export interface NumberAction {
    type: ActionTypes.CHANGE_NUMBER;
    payload: number
}

export interface MinusAction {
    type: ActionTypes.MINUS;
    payload: number
}

export interface FetchProductAction {
    type: ActionTypes.FETCH_PRODUCT;
    payload: IProduct[]
}

export interface AddToCartAction {
    type: ActionTypes.ADD_TO_CART;
    payload: IProduct
}

export interface UpdateQuantityCartAction {
    type: ActionTypes.UPDATE_QUANTITY_CART;
    payload: IProduct
}

export interface DeleteCartItemAction {
    type: ActionTypes.DELETE_CART_ITEM;
    payload: IProduct
}

export interface PurchaseAction {
    type: ActionTypes.PURCHASE;
}

export type Action =
    CountAction
    | MinusAction
    | NumberAction
    | FetchProductAction
    | AddToCartAction
    | UpdateQuantityCartAction
    | DeleteCartItemAction
    | PurchaseAction;
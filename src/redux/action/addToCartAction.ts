import { ActionTypes } from "../../utils/interface/enum/EAction"
import { IProduct } from "../../utils/interface/IProduct"

export const addToCartAction = (product: IProduct) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}

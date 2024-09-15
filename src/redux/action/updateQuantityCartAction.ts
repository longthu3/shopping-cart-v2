import { ActionTypes } from "../../utils/interface/enum/EAction"
import { IProduct } from "../../utils/interface/IProduct"

export const updateQuantityCartAction = (product: IProduct) => {
    return {
        type: ActionTypes.UPDATE_QUANTITY_CART,
        payload: product
    }
}

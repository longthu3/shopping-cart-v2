import { ActionTypes } from "../../utils/interface/enum/EAction"
import { IProduct } from "../../utils/interface/IProduct"

export const deleteItemCartAction = (product: IProduct) => {
    return {
        type: ActionTypes.DELETE_CART_ITEM,
        payload: product
    }
}

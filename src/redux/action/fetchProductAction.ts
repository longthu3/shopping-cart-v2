import { ActionTypes } from "../../utils/interface/enum/EAction";
import { IProduct } from "../../utils/interface/IProduct";

const fetchProductAction = (value: IProduct[]) => {
    return {
        type: ActionTypes.FETCH_PRODUCT,
        payload: value
    }
}

export default fetchProductAction;
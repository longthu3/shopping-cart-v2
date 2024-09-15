import { ActionTypes } from "../../utils/interface/enum/EAction";
import { Action } from "../../utils/interface/IAction";
import { InitialState } from "../../utils/interface/IState";


const initialState: InitialState = {
    count: 0,
    number: 0,
    listProduct: [],
    cart: []
}

export const reducer = (state: InitialState = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.COUNT:
            return { ...state, count: state.count + action.payload };
        case ActionTypes.MINUS:
            return { ...state, count: state.count - action.payload };
        case ActionTypes.CHANGE_NUMBER:
            return { ...state, number: action.payload };
        case ActionTypes.FETCH_PRODUCT:
            return { ...state, listProduct: action.payload };
        case ActionTypes.ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] }
        case ActionTypes.UPDATE_QUANTITY_CART:
            {
                const newCartData = state.cart.map((item) => {
                    if (item._id === action.payload._id && item.quantity > action.payload.quantityCart) {

                        return { ...item, quantityCart: action.payload.quantityCart };
                    }
                    return item;
                });
                return { ...state, cart: newCartData };
            }
        case ActionTypes.DELETE_CART_ITEM:
            {
                const newCartData = state.cart.filter((item) => item._id !== action.payload._id);
                return { ...state, cart: newCartData };
            }
        case ActionTypes.PURCHASE:
            return { ...state, cart: [] };
        default:
            return state;
    }
}
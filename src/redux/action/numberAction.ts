import { ActionTypes } from "../../utils/interface/enum/EAction";

const numberAction = (value: number) => {
    return {
        type: ActionTypes.CHANGE_NUMBER,
        payload: value
    }
}

export default numberAction;
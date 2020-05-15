import { actionType } from "./../actions/Color"

const initialState = {
    color: "red",
}

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_COLOR_SUCCESS:
            return {
                ...state,
                color: action.color
            }
        default:
            return { ...state }
    }

}
export default colorReducer;
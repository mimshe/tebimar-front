import {
    OPEN_MODAL,
    CLOSE_MODAL,
} from "../actions/type";

export const initialState = {
    name: null
};

let modal = (state = initialState, action = {}) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case OPEN_MODAL:
            return {
                name: (payload === undefined) ? state.name : payload
            };

        case CLOSE_MODAL:
            return initialState;

        default:
            return state;
    }

}
export default modal;
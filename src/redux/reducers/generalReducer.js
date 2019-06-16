import {
    RESET_GENERAL,
    SET_GENERAL,
} from "../actions/type";

export const initialState = {
    currencyUnit: null,
    localLang: null
};

let general = (state = initialState, action = {}) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case SET_GENERAL:
            return {
                ...state,
                currencyUnit: (payload.currencyUnit === undefined) ? state.currencyUnit : payload.currencyUnit,
                localLang: (payload.localLang === undefined) ? state.localLang : payload.localLang
            };

        case RESET_GENERAL:
            return initialState;

        default:
            return state;
    }

}
export default general;
import {
    RESET_USER,
    SET_USER,
} from "../actions/type";

export const initialState = {
    mobile: null,
    token: null,
    is_logged: false,
    name: '',
    family: '',
    email:'',
    refer_code:'',
    credit: 0
};

let user = (state = initialState, action = {}) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                mobile: (payload.mobile === undefined) ? state.mobile : payload.mobile,
                token: (payload.token === undefined) ? state.token : payload.token,
                name: (payload.name === undefined) ? state.name : payload.name,
                family: (payload.family === undefined) ? state.family : payload.family,
                credit: (payload.credit === undefined) ? state.credit : payload.credit,
                email: (payload.email === undefined) ? state.email : payload.email,
                refer_code: (payload.refer_code === undefined) ? state.refer_code : payload.refer_code,
                is_logged: (payload.is_logged === undefined) ? state.is_logged : payload.is_logged,
            };

        case RESET_USER:
            return initialState;

        default:
            return state;
    }

}
export default user;
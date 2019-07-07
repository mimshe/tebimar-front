import {
    RESET_USER,
    SET_USER,
} from "../actions/type";

export const initialState = {
    name: null,
    family:null,
    mobile:null,
    email:null,
    country_id:null,
    updated_at:null,
    created_at:null,
    id:null,
    token:null,
};

let user = (state = initialState, action = {}) => {
    const {
        payload
    } = action;
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                name: (payload.name === undefined) ? state.name : payload.name,
                family:(payload.family === undefined) ? state.family : payload.family,
                mobile:(payload.mobile === undefined) ? state.mobile : payload.mobile,
                email:(payload.email === undefined) ? state.email : payload.email,
                country_id:(payload.country_id === undefined) ? state.country_id : payload.country_id,
                updated_at:(payload.updated_at === undefined) ? state.updated_at : payload.updated_at,
                created_at:(payload.created_at === undefined) ? state.created_at : payload.created_at,
                id:(payload.id === undefined) ? state.id : payload.id,
                token:(payload.token === undefined) ? state.token : payload.token,
            };

        case RESET_USER:
            return initialState;

        default:
            return state;
    }

}
export default user;
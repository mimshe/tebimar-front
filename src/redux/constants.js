import {
    resetUser,
 setUser
} from "./actions";
import {setToken} from "./actions/index";

export const mapDispatchToProps = dispatch => {
    return {

        setUser: user => {
            dispatch(setUser(user));
        },

        resetUser: user => {
            dispatch(resetUser());
        },
    }
};

export const mapStateToProps = (state) => {
    return {
        basket: state.basket,
        user: state.user,

    }
};
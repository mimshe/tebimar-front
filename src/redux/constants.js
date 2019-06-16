import {
    resetUser,
    setUser,
    openModal,
    closeModal
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
        openModal: modal => {
            dispatch(openModal(modal));
        },

        closeModal: user => {
            dispatch(closeModal());
        },
    }
};

export const mapStateToProps = (state) => {
    return {
        basket: state.basket,
        user: state.user,
        modal: state.modal
    }
};
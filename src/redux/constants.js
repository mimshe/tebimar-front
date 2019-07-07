import {
    resetUser,
    setUser,
    openModal,
    closeModal,
    setGeneral,
    resetGeneral,
    setClient,
    resetClient
} from "./actions";

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
        setGeneral: general => {
            dispatch(setGeneral(general));
        },
        resetGeneral: general => {
            dispatch(resetGeneral());
        },
    }
};

export const mapStateToProps = (state) => {
    return {
        user: state.user,
        modal: state.modal,
        general: state.general,
    }
};
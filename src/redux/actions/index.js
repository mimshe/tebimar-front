import {
    RESET_USER,
    SET_USER,
    OPEN_MODAL,
    CLOSE_MODAL
} from './type';



export const resetUser = () => ({
    type: RESET_USER,
});
export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});
export const openModal = (modal) => ({
    type: OPEN_MODAL,
    payload: modal,
});

export const setProgressBar = (isOpen) => (
{
    type: 'SET_PROGRESS_BAR',
    isOpen: isOpen
});
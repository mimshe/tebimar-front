import { RESET_USER, SET_USER} from './type';



export const resetUser = () => ({
    type: RESET_USER,
});


export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const setProgressBar = (isOpen) => (
    {
        type: 'SET_PROGRESS_BAR',
        isOpen: isOpen
    });
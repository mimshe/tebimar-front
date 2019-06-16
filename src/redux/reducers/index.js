import {combineReducers} from 'redux';

import user from './userReducer'
import modal from './modalReducer'
import general from './generalReducer'

export default combineReducers({
    user,
    modal,
    general
})
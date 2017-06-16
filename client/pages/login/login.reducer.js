import { SET_CURRENT_USER } from './login.action'
import isEmpty from 'lodash/isEmpty'


const initialState = {
    isAuthenticated: false,
    token: {}
}

export const login = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.token),
                token: action.token
            }
        default: return state
    }
}
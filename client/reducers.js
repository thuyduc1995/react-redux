import { combineReducers } from 'redux'
import { dashboards, login } from './pages'

export const AppReducer = combineReducers({
    dashboards, login
})

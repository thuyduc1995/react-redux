import { combineReducers } from 'redux'
import { dashboards, login, contacts, tasks, stocks } from './pages'


export const AppReducer = combineReducers({
    dashboards, login, contacts, tasks, stocks
})

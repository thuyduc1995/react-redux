import { combineReducers } from 'redux'
import { dashboards, contacts, tasks, stocks } from './pages'


export const AppReducer = combineReducers({
    dashboards, contacts, tasks, stocks
})

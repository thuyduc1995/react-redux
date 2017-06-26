import { combineReducers } from 'redux'
import { dashboards, login, contacts, tasks } from './pages'

export const AppReducer = combineReducers({
    dashboards, login, contacts, tasks
})

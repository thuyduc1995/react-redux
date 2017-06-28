import { ADD_TODO_DASHBOARD } from '../dashboard/components/todoWidget/todoWidget.action'

export const dashboards = (state = {}, action = {}) => {
    switch (action.type) {
        case ADD_TODO_DASHBOARD: {
            let listDashboards = state

            listDashboards[0].widgets.forEach(widget => {
                if (widget.id === action.widgetId) {
                    widget.configs.task.push(action.taskId)
                }
            })

            return listDashboards
        }
        default:
            return state
    }
}

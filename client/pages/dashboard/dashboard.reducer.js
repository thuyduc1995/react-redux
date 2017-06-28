import { ADD_TODO_DASHBOARD, REMOVE_TASK_DASHBOARD } from '../dashboard/components/todoWidget/todoWidget.action'

export const dashboards = (state = {}, action = {}) => {
    switch (action.type) {
        case ADD_TODO_DASHBOARD: {
            return state[0].widgets.map(widget => {
                if (widget.id === action.widgetId) {
                    let currentTask = widget.configs.task

                    return {
                        ...widget,
                        configs: {
                            task: [...currentTask, action.taskId]
                        }
                    }
                }
                    return widget
            })
        }
        default:
            return state
    }
}
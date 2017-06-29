import { ADD_TODO_DASHBOARD, REMOVE_TASK_DASHBOARD, CHANGE_SETTING_TODO} from '../dashboard/components/todoWidget/todoWidget.action'
import {CHANGE_SETTING_TEXT} from '../dashboard/components/textWidget/textWidget.action'

export const dashboards = (state = {}, action = {}) => {
    switch (action.type) {
        case ADD_TODO_DASHBOARD:
            return [
                {
                    ...state[0],
                    widgets: state[0].widgets.map(widget => {
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
            ]

        case REMOVE_TASK_DASHBOARD:
            return [
                {
                    ...state[0],
                    widgets: state[0].widgets.map(widget => {
                        if (widget.id === action.widgetId) {
                            return {
                                ...widget,
                                configs: {
                                    task: widget.configs.task.filter(id => id !== action.taskId)
                                }
                            }
                        }

                        return widget
                    })
                }
            ]

        case CHANGE_SETTING_TODO:
            return [
                {
                    ...state[0],
                    widgets: state[0].widgets.map(widget => {
                        if (widget.id === action.widgetId) {
                            return {
                                ...widget,
                                title: action.widgetTitle
                            }
                        }

                        return widget
                    })
                }
            ]

        case CHANGE_SETTING_TEXT:
            return [
                {
                    ...state[0],
                    widgets: state[0].widgets.map(widget => {
                        if (widget.id === action.widgetId) {
                            return {
                                ...widget,
                                title: action.widgetTitle,
                                configs: {
                                    text: action.text
                                }
                            }
                        }

                        return widget
                    })
                }
            ]

        default:
            return state
    }
}
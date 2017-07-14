import { ADD_TODO_DASHBOARD, REMOVE_TASK_DASHBOARD, CHANGE_SETTING_TODO } from '../dashboard/components/todoWidget/todoWidget.action'
import { CHANGE_SETTING_TEXT } from '../dashboard/components/textWidget/textWidget.action'
import { CHANGE_SETTING_DATATABLE } from '../dashboard/components/datatableWidget/datatableWidget.action'
import { CHANGE_SETTING_ORGCHART } from '../dashboard/components/orgchartWidget/orgchartWidget.action'
import { REMOVE_WIDGET, CHANGE_LAYOUT } from './dashboard.action'
import { CREATE_TEXT_WIDGET, CREATE_DATATABLE_WIDGET, CREATE_ORGCHART_WIDGET, CREATE_TODO_WIDGET } from '../dashboard/components/addWidget/addWidget.action'


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

        case CHANGE_SETTING_DATATABLE:
            return [
                {
                    ...state[0],
                    widgets: state[0].widgets.map(widget => {
                        if (widget.id === action.widgetId) {
                            return {
                                ...widget,
                                title: action.widgetTitle,
                                configs: {
                                    ...widget.configs,
                                    activeColumn: action.activeColumn
                                }
                            }
                        }

                        return widget
                    })
                }
            ]

        case REMOVE_WIDGET:
            return [
                {
                    ...state[0],
                    widgets: state[0].widgets.map(widget => {
                        if (widget.id === action.widgetId) {
                            return {
                                ...widget,
                                title: 'New Widget',
                                widgetType: 'NEW_WIDGET',
                                configs: {
                                }
                            }
                        }

                        return widget
                    })
                }
            ]

        case CREATE_TEXT_WIDGET:
            return [
                {
                    ...state[0],
                    widgets: state[0].widgets.map(widget => {
                        if (widget.id === action.widgetId) {
                            return {
                                ...widget,
                                title: action.widgetTitle,
                                widgetType: 'TEXT_WIDGET',
                                configs: {
                                    text: action.text
                                }
                            }
                        }

                        return widget
                    })
                }
            ]

        case CREATE_DATATABLE_WIDGET:
            return [
                {
                    ...state[0],
                    widgets: state[0].widgets.map(widget => {
                        if (widget.id === action.widgetId) {
                            return {
                                ...widget,
                                title: action.widgetTitle,
                                widgetType: 'DATATABLE_WIDGET',
                                configs: {
                                    dataSource: action.targetSource,
                                    activeColumn: action.activeColumn
                                }
                            }
                        }

                        return widget
                    })
                }
            ]

        case CREATE_TODO_WIDGET:
            return [
                {
                    ...state[0],
                    widgets: state[0].widgets.map(widget => {
                        if (widget.id === action.widgetId) {
                            return {
                                ...widget,
                                title: action.widgetTitle,
                                widgetType: 'TODO_WIDGET',
                                configs: {
                                    task: []
                                }
                            }
                        }

                        return widget
                    })
                }
            ]

        case CREATE_ORGCHART_WIDGET:
            return [
                {
                    ...state[0],
                    widgets: state[0].widgets.map(widget => {
                        if (widget.id === action.widgetId) {
                            return {
                                ...widget,
                                title: action.widgetTitle,
                                widgetType: 'ORGCHART_WIDGET',
                                configs: {
                                    rootId: 2
                                }
                            }
                        }

                        return widget
                    })
                }
            ]

        case CHANGE_LAYOUT:
            return [
                {
                    ...state[0],
                    layoutType: action.layoutType
                }
            ]

        case CHANGE_SETTING_ORGCHART:
            return [
                {
                    ...state[0],
                    widgets: state[0].widgets.map(widget => {
                        if (widget.id === action.widgetId) {
                            return {
                                ...widget,
                                title: action.widgetTitle,
                                configs: {
                                    rootId: parseInt(action.rootId, 10)
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
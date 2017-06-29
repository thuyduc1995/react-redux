export const ADD_TODO_TASK = 'ADD_TODO_TASK'
export const ADD_TODO_DASHBOARD = 'ADD_TODO_DASHBOARD'
export const CHANGE_TASK = 'CHANGE_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const REMOVE_TASK_DASHBOARD = 'REMOVE_TASK_DASHBOARD'
export const CHANGE_SETTING_TODO = 'CHANGE_SETTING_TODO'

export const addTodoTaskAction = (content, taskId) => {
    return {
        type: ADD_TODO_TASK,
        content,
        taskId
    }
}

export const addTodoDashboardAction = (widgetId, taskId) => {
    return {
        type: ADD_TODO_DASHBOARD,
        widgetId,
        taskId
    }
}

export const changeTaskAction = (taskId) => {
    return {
        type: CHANGE_TASK,
        taskId
    }
}

export const removeTaskAction = (taskId) => {
    return {
        type: REMOVE_TASK,
        taskId
    }
}

export const removeTaskDashboardAction = (widgetId, taskId) => {
    return {
        type: REMOVE_TASK_DASHBOARD,
        widgetId,
        taskId
    }
}

export const changeSettingTodoAction = (widgetTitle, widgetId) => {
    return {
        type: CHANGE_SETTING_TODO,
        widgetTitle,
        widgetId
    }
}
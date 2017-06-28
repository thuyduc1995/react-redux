export const ADD_TODO_TASK = 'ADD_TODO_TASK'
export const ADD_TODO_DASHBOARD = 'ADD_TODO_DASHBOARD'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const CHANGE_TASK = 'CHANGE_TASK'


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


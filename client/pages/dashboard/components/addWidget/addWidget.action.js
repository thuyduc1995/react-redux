export const CREATE_TEXT_WIDGET = 'CREATE_TEXT_WIDGET'
export const CREATE_TODO_WIDGET = 'CREATE_TODO_WIDGET'
export const CREATE_DATATABLE_WIDGET = 'CREATE_DATATABLE_WIDGET'
export const CREATE_ORGCHART_WIDGET = 'CREATE_ORGCHART_WIDGET'

export const createTextWidget = (text, widgetTitle, widgetId) => {
    return {
        type: CREATE_TEXT_WIDGET,
        text,
        widgetTitle,
        widgetId
    }
}

export const createDatatableWidget = (targetSource, activeColumn, widgetTitle, widgetId) => {
    return {
        type: CREATE_DATATABLE_WIDGET,
        targetSource,
        activeColumn,
        widgetTitle,
        widgetId
    }
}

export const createTodoWidget = (widgetTitle, widgetId) => {
    return {
        type: CREATE_TODO_WIDGET,
        widgetTitle,
        widgetId
    }
}

export const createOrgchartWidget = (widgetTitle, widgetId) => {
    return {
        type: CREATE_TODO_WIDGET,
        widgetTitle,
        widgetId
    }
}


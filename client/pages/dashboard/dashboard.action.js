export const REMOVE_WIDGET = 'REMOVE_WIDGET'

export const removeWidgetAction = (widgetId) => {
    return {
        type: REMOVE_WIDGET,
        widgetId
    }
}


export const REMOVE_WIDGET = 'REMOVE_WIDGET'
export const CHANGE_LAYOUT = 'CHANGE_LAYOUT'

export const removeWidgetAction = (widgetId) => {
    return {
        type: REMOVE_WIDGET,
        widgetId
    }
}
export const changeLayoutAction = (layoutType) => {
    return {
        type: CHANGE_LAYOUT,
        layoutType
    }

}


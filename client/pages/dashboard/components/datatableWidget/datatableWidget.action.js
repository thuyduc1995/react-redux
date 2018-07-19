export const CHANGE_SETTING_DATATABLE = 'CHANGE_SETTING_DATATABLE'
export const REMOVE_WIDGET = 'REMOVE_WIDGET'

export const changeSettingDatatableAction = (activeColumn, widgetTitle, widgetId) => {
    return {
        type: CHANGE_SETTING_DATATABLE,
        activeColumn,
        widgetTitle,
        widgetId
    }
}


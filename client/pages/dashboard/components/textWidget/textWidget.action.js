export const CHANGE_SETTING_TEXT = 'CHANGE_SETTING_TEXT'

export const changeSettingTextAction = (widgetTitle, text, widgetId) => {
    console.log('map action')

return {
        type: CHANGE_SETTING_TEXT,
        widgetTitle,
        text,
        widgetId
    }
}
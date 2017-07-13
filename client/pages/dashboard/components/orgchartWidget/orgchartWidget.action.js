export const CHANGE_SETTING_ORGCHART = 'CHANGE_SETTING_ORGCHART'

export const changeSettingOrgchartAction = (widgetId, widgetTitle, rootId) => {
    return {
        type: CHANGE_SETTING_ORGCHART,
        widgetId,
        widgetTitle,
        rootId
    }
}


import React from 'react'
import cssModules from 'react-css-modules'
import style from './titleWidget.style.scss'

export const TitleWidgetView = cssModules(({widgetTitle, settingClick, dashboardMode}) => {
    let isDisplay = dashboardMode === 'view' ? 'none' : 'block'

    return (
        <div className="panel-heading" styleName="panel-heading">
            {widgetTitle}
            <span className="glyphicon glyphicon-remove" styleName="panel-heading--icon" style = {{display: isDisplay}}></span>
            <span className="glyphicon glyphicon-fullscreen" styleName="panel-heading--icon"></span>
            <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon" onClick={settingClick} style = {{display: isDisplay}}></span>
        </div>
    )
}, style)
import React from 'react'
import cssModules from 'react-css-modules'
import style from './textWidget.style.scss'
import {TitleWidgetView} from '../titleWidget.view'
export const TextWidgetView = cssModules(({data, settingClick, dashboardMode, onRemove}) => {
    return (
        <div>
            <div className="panel panel-default" styleName="panel">
                <TitleWidgetView widgetTitle={data.title} settingClick = {settingClick} dashboardMode = {dashboardMode} onRemove = {onRemove}/>
                <div className="panel-body" styleName="panel-body">
                    <div styleName="body-content" >
                        {data.configs.text}
                    </div>
                </div>
            </div>
        </div>
    )
}, style)
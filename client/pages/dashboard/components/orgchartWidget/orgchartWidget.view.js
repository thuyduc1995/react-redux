import React from 'react'
import cssModules from 'react-css-modules'
import style from './orgchartWidget.style.scss'
import {TitleWidgetView} from '../titleWidget.view'
export const OrgchartWidgetView = cssModules(({data, settingClick, dashboardMode}) => {
    return (
        <div>
            <div className="panel panel-default" styleName="panel">
                <TitleWidgetView widgetTitle={data.title} settingClick = {settingClick} dashboardMode = {dashboardMode}/>
                <div className="panel-body" styleName="panel-body">
                    <div styleName="body-content" >
                        {data.configs.text}
                    </div>
                </div>
            </div>
        </div>
    )
}, style)
import React from 'react'
import cssModules from 'react-css-modules'
import style from './addWidget.style.scss'

export const AddWidgetView = cssModules(({ settingClick, dashboardMode }) => {
    let isDisplay = dashboardMode === 'view' ? 'none' : 'block'

    return (
            <div style = {{display: isDisplay}}>
                <div className="panel panel-default" styleName="panel">
                    <div className="panel-heading" styleName="panel-heading">
                        Add Widget
                        <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon" onClick={settingClick}></span>
                    </div>
                    <div className="panel-body" styleName="panel-body">
                        <span className="glyphicon glyphicon-plus" styleName="body-content" onClick={settingClick}></span>
                    </div>
                </div>
            </div>
        )
}, style)
import React from 'react'
import cssModules from 'react-css-modules'
import style from './addWidget.style.scss'

export const AddWidgetView = cssModules(({ settingClick, dashboardMode, layoutType}) => {
    let isDisplay = dashboardMode === 'view' ? 'none' : 'block'

    let layout = ''

    switch (layoutType) {
        case '1_COLUMN':
            layout = 'col-md-8'
            break
        case '2_COLUMN':
            layout = 'col-md-6'
            break
        case '3_COLUMN':
            layout = 'col-md-4'
            break
        default:
            break
    }

    return (
            <div style={{display: isDisplay}} className={layout}>
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
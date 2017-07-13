import React from 'react'
import cssModules from 'react-css-modules'
import style from './textWidget.style.scss'

import {TitleWidgetView} from '../titleWidget.view'
export const TextWidgetView = cssModules(({data, settingClick, dashboardMode, onRemove, layoutType, fullscreen, onFullscreenChange}) => {
    let layout = ''
    let fullscreenstyle = {}
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
    if (fullscreen) {
        fullscreenstyle = {
            position: 'fixed',
            transform: 'scale(1.7)',
            margin: 'auto',
            zIndex: '10',
            top: '400px'
        }
    }

    return (
        <div className={layout} style={fullscreenstyle}>
            <div className="panel panel-default" styleName="panel">
                <TitleWidgetView widgetTitle={data.title} settingClick={settingClick} dashboardMode={dashboardMode}
                                 onRemove={onRemove} onFullscreenChange={onFullscreenChange}/>
                <div className="panel-body" styleName="panel-body">
                    <div styleName="body-content">
                        {data.configs.text}
                    </div>
                </div>
            </div>
        </div>
    )
}, style)
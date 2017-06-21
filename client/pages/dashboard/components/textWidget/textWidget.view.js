import React from 'react'
import cssModules from 'react-css-modules'
import style from './textWidget.style.scss'

export const TextWidgetView = cssModules(() => {
    return (
        <div>
            <div className="panel panel-default" styleName="panel">
                <div className="panel-heading" styleName="panel-heading">
                    Add Widget
                    <span className="glyphicon glyphicon-remove" styleName="panel-heading--icon"></span>
                    <span className="glyphicon glyphicon-fullscreen" styleName="panel-heading--icon"></span>
                    <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon"></span>
                </div>
                <div className="panel-body" styleName="panel-body">
                    <div styleName="body-content" >
                        Text Appear here
                    </div>
                </div>
            </div>
        </div>
    )
}, style)
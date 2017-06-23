import React from 'react'
import cssModules from 'react-css-modules'
import style from './titleWidget.style.scss'

export const TitleWidgetView = cssModules(({data}) => {
    return (
        <div className="panel-heading" styleName="panel-heading">
            {data.title}
            <span className="glyphicon glyphicon-remove" styleName="panel-heading--icon"></span>
            <span className="glyphicon glyphicon-fullscreen" styleName="panel-heading--icon"></span>
            <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon"></span>
        </div>
    )
}, style)
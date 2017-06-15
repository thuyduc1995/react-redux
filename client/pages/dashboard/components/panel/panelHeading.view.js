import React from 'react'

import cssModules from 'react-css-modules'
import style from './panel.style.scss'

export const PanelHeadingView = cssModules(() => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">Panel Heading</div>
            <div className="panel-body">Panel Content</div>
        </div>
    )
}, style, {errorWhenNotFound: false})
import React from 'react'
import cssModules from 'react-css-modules'
import style from './panel.style.scss'

export const PanelContentView = cssModules(({content}) => {
    return (
        <div className= 'panel-body'>{content}</div>
    )
}, style, {errorWhenNotFound: false})
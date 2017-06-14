import React from 'react'
import {ButtonGroup, Button, Panel} from 'react-bootstrap'
import cssModules from 'react-css-modules'
import style from './addWidget.style.scss'

export const AddWidgetView = cssModules(() => {
    return (
        <Panel header={'Add Widget'} bsStyle="primary" styleName='widget'>
            Panel content
        </Panel>
    )
}, style, {errorWhenNotFound: false})
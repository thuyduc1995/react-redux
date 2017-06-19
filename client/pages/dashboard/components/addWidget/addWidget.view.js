import React from 'react'
import { ButtonGroup, Button, Panel} from 'react-bootstrap'
import cssModules from 'react-css-modules'
import style from './addWidget.style.scss'

export const AddWidgetView = cssModules(({ createNewWidgetEvent }) => {
        return (
            <div>
                <div className="panel panel-default" styleName="panel">
                    <div className="panel-heading" styleName="panel-heading">
                        Add Widget
                        <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon"></span>
                    </div>
                    <div className="panel-body" styleName="panel-body">
                        <span className="glyphicon glyphicon-plus" styleName="body-content" onClick={createNewWidgetEvent}></span>
                    </div>
                </div>
            </div>
        )
}, style)
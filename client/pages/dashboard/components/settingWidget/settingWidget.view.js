import React from 'react'
import { ButtonGroup, Button, Panel, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import cssModules from 'react-css-modules'
import style from './settingWidget.style.scss'


export const SettingWidgetView = cssModules(() => {
        return (
            <div>
                <div className="panel panel-default" styleName="panel">
                    <div className="panel-heading" styleName="panel-heading">
                        Widget Settings
                        <span className="glyphicon glyphicon-cog" styleName="panel-heading--icon"></span>
                    </div>
                    <div className="panel-body" styleName="panel-body">
                        <form>
                            <FormGroup controlId="formValidationSuccess1" validationState="success">
                                <ControlLabel>Input with success</ControlLabel>
                                <FormControl type="text" />
                            </FormGroup>
                        </form>
                    </div>
                </div>
            </div>
        )
}, style)
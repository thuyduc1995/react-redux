import React from 'react'
import {Button, ControlLabel, FormControl} from 'react-bootstrap'
import cssModules from 'react-css-modules'
import style from '../settingWidget.style.scss'
import {TextSettingView} from './textSetting.view'

export const SettingTextWidgetView = cssModules(({cancelClick, data, onTitleSettingChange, onTextSettingChange, onSubmitSetting}) => {
    return (
        <div>
            <div className="panel panel-default" styleName="panel">
                <div className="panel-heading" styleName="panel-heading">
                    Widget Settings
                    <span className="glyphicon glyphicon-remove" styleName="panel-heading--icon"
                          onClick={cancelClick}></span>
                </div>
                <div className="panel-body" styleName="panel-body">
                    <form>
                        <div styleName="container--title">
                            <ControlLabel styleName="form--label">Widget Title:</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="New Widget"
                                defaultValue={data.title}
                                onChange = {onTitleSettingChange}
                            />
                        </div>
                        <div styleName="container--type">
                            <ControlLabel styleName="form--label">Widget Type:</ControlLabel>
                            <FormControl componentClass="select" defaultValue={data.widgetType}>
                                <option value="TEXT_WIDGET">Text</option>
                            </FormControl>
                        </div>
                        <div styleName="container--width">
                            <ControlLabel styleName="form--label">Min Width:</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="400"
                            />
                        </div>
                        <div styleName="container--height">
                            <ControlLabel styleName="form--label">Min Height:</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="200"
                            />
                        </div>
                        <Button bsStyle="primary" styleName="form--button" onClick = {onSubmitSetting}>OK</Button>
                        <Button styleName="form--button" onClick={cancelClick}>Cancel</Button>
                    </form>
                </div>
                <TextSettingView data = {data} onTextSettingChange = {onTextSettingChange}/>
            </div>
        </div>
    )
}, style)


import React from 'react'
import {Button, ControlLabel, FormControl} from 'react-bootstrap'
import cssModules from 'react-css-modules'
import style from '../settingWidget.style.scss'

import {DatatableSettingView} from '../settingDatatableWidget/datatableSetting.view'
import {TextSettingView} from '../settingTextWidget/textSetting.view'
import {OrgchartSettingView} from '../settingOrgchartWidget/orgchartSetting.view'
let checkType = (type, data) => {
    switch (type) {
        case 'TEXT_WIDGET':
            return <TextSettingView data = {data}/>
        case 'DATATABLE_WIDGET':
            return <DatatableSettingView data = {data}/>
        case 'ORGCHART_WIDGET':
            return <OrgchartSettingView data = {data}/>
        case 'TODO_WIDGET':
            return null
        default:
            return null
    }
}

export const SettingNewWidgetView = cssModules(({changeDropdown, typeWidget, cancelClick, data}) => {
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
                                value={data.title}
                            />
                        </div>
                        <div styleName="container--type">
                            <ControlLabel styleName="form--label">Widget Type:</ControlLabel>
                            <FormControl componentClass="select" onChange={changeDropdown} defaultValue={typeWidget}>
                                <option value="default"></option>
                                <option value="TEXT_WIDGET">Text</option>
                                <option value="DATATABLE_WIDGET">Datatable</option>
                                <option value="ORGCHART_WIDGET">OrgChart</option>
                                <option value="TODO_WIDGET">ToDos</option>
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
                        <Button bsStyle="primary" styleName="form--button">OK</Button>
                        <Button styleName="form--button" onClick={cancelClick}>Cancel</Button>
                    </form>
                </div>
                {
                    checkType(typeWidget, data)
                }
            </div>
        </div>
    )
}, style)


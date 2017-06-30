import React from 'react'
import {Button, ControlLabel, FormControl} from 'react-bootstrap'
import cssModules from 'react-css-modules'
import style from '../settingWidget.style.scss'

import {DatatableSettingView} from '../settingDatatableWidget/datatableSetting.view'
import {TextSettingView} from '../settingTextWidget/textSetting.view'
import {OrgchartSettingView} from '../settingOrgchartWidget/orgchartSetting.view'
let checkType = (targetType, data, changeToActive, changeFromActive, text, activeColumn, disableColumn, onTextSettingChange, changeDataSource) => {
    switch (targetType) {
        case 'TEXT_WIDGET':
            return <TextSettingView data = {data} onTextSettingChange = {onTextSettingChange}/>
        case 'DATATABLE_WIDGET':
            return <DatatableSettingView changeToActive = {changeToActive} changeFromActive = {changeFromActive} activeColumn = {activeColumn} disableColumn = {disableColumn} changeDataSource = {changeDataSource}/>
        case 'ORGCHART_WIDGET':
            return <OrgchartSettingView data = {data}/>
        case 'TODO_WIDGET':
            return null
        default:
            return null
    }
}

export const SettingNewWidgetView = cssModules(({changeDropdown, targetType, cancelClick, data, onTitleSettingChange, onSubmitSetting, changeToActive, changeFromActive, text, activeColumn, disableColumn, dataSource, onTextSettingChange, changeDataSource}) => {
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
                                defaultValue = {data.title}
                                onChange = {onTitleSettingChange}
                            />
                        </div>
                        <div styleName="container--type">
                            <ControlLabel styleName="form--label">Widget Type:</ControlLabel>
                            <FormControl componentClass="select" onChange = {changeDropdown} defaultValue = {targetType}>
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
                        <Button bsStyle="primary" styleName="form--button" onClick = {onSubmitSetting}>OK</Button>
                        <Button styleName="form--button" onClick={cancelClick}>Cancel</Button>
                    </form>
                </div>
                {
                    checkType(targetType, data, changeToActive, changeFromActive, text, activeColumn, disableColumn, onTextSettingChange, changeDataSource)
                }
            </div>
        </div>
    )
}, style)


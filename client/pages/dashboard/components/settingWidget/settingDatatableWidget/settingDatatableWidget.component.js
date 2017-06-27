import React from 'react'
import {SettingDatatableWidgetView} from './settingDatatableWidget.view'

const disableColumn = ['lastName', 'title']
const activeColumn = ['ID', 'firstName', 'employeeId',]
export class SettingDatatableWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeColumn,
            disableColumn
        }
    }

    render() {
        return <SettingDatatableWidgetView cancelClick = {this.props.cancelClick} data = {this.props.data} activeColumn = {this.state.activeColumn} disableColumn = {this.state.disableColumn}/>
    }
}

import React from 'react'
import {SettingDatatableWidgetView} from './settingDatatableWidget.view'
import {connect} from 'react-redux'
import {difference} from 'underscore'

@connect(state => ({ contact: state.contacts, stock: state.stocks }))
export class SettingDatatableWidget extends React.Component {



    render() {
        return <SettingDatatableWidgetView cancelClick = {this.props.cancelClick} data = {this.props.data} activeColumn = {this.state.activeColumn} disableColumn = {this.state.disableColumn}
                                           changeFromActive = {this.changeFromActiveEvent} changeToActive = {this.changeToActiveEvent}
        />
    }
}
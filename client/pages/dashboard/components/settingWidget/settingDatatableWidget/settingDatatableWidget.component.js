import React from 'react'
import {SettingDatatableWidgetView} from './settingDatatableWidget.view'
import {connect} from 'react-redux'
import {difference} from 'underscore'

@connect(state => ({ contact: state.contacts, stock: state.stocks }))
export class SettingDatatableWidget extends React.Component {
    constructor(props) {
        super(props)
        let activeColumn = Object.assign([], this.props.data.configs.activeColumn)
        let disableColumn = Object.assign([], difference(Object.keys(this.props.contact[0]), this.props.data.configs.activeColumn))

        this.state = {
            activeColumn,
            disableColumn
        }
    }
    changeFromActiveEvent = (column) => {
        let tempActive = this.state.activeColumn
        let tempDisable = this.state.disableColumn
        let index = tempActive.indexOf(column)

        tempDisable.push(column)
        tempActive.splice(index, 1)
        this.setState({
            disableColumn: tempDisable,
            activeColumn: tempActive
        })

    }
    changeToActiveEvent = (column) => {
        let tempActive = this.state.activeColumn
        let tempDisable = this.state.disableColumn
        let index = tempDisable.indexOf(column)

        tempActive.push(column)
        tempDisable.splice(index, 1)
        this.setState({
            activeColumn: tempActive,
            disableColumn: tempDisable
        })
    }

    render() {
        return <SettingDatatableWidgetView cancelClick = {this.props.cancelClick} data = {this.props.data} activeColumn = {this.state.activeColumn} disableColumn = {this.state.disableColumn}
                                           changeFromActive = {this.changeFromActiveEvent} changeToActive = {this.changeToActiveEvent}
        />
    }
}
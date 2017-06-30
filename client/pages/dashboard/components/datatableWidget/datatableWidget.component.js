import React from 'react'
import {DatatableWidgetView} from './datatableWidget.view'
import {connect} from 'react-redux'
import {SettingDatatableWidgetView} from '../settingWidget/settingDatatableWidget/settingDatatableWidget.view'
import {difference} from 'underscore'
import {changeSettingDatatableAction} from './datatableWidget.action'
import {removeWidgetAction} from '../../dashboard.action'

@connect(state => ({contact: state.contacts, stock: state.stocks}), ({changeSettingDatatableAction, removeWidgetAction}))
export class DatatableWidget extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mode: 'display',
            activeColumn: this.props.data.configs.activeColumn.map(item => item),
            disableColumn: this.props.data.configs.dataSource === 'Contacts' ? difference(Object.keys(this.props.contact[0]), this.props.data.configs.activeColumn).map(item => item) :
                difference(Object.keys(this.props.stock[0]), this.props.data.configs.activeColumn).map(item => item),
            dataSource: this.props.data.configs.dataSource,
            titleSetting: this.props.data.title
        }
    }

    settingClickEvent = (event) => {
        event.preventDefault()

        return this.setState({mode: 'setting'})
    }
    cancelClickEvent = (event) => {
        event.preventDefault()
        event.preventDefault()

        return this.setState({
            mode: 'display',
            activeColumn: this.props.data.configs.activeColumn.map(item => item),
            disableColumn: this.props.data.configs.dataSource === 'Contacts' ? difference(Object.keys(this.props.contact[0]), this.props.data.configs.activeColumn).map(item => item) :
                difference(Object.keys(this.props.stock[0]), this.props.data.configs.activeColumn).map(item => item)
        })
    }
    changeFromActiveEvent = (column) => {
        let tempActive = this.state.activeColumn.map(item => item)
        let tempDisable = this.state.disableColumn.map(item => item)
        let index = tempActive.indexOf(column)

        tempDisable.push(column)
        tempActive.splice(index, 1)
        this.setState({
            disableColumn: tempDisable.map(item => item),
            activeColumn: tempActive.map(item => item)
        })

    }
    changeToActiveEvent = (column) => {
        let tempActive = this.state.activeColumn.map(item => item)
        let tempDisable = this.state.disableColumn.map(item => item)
        let index = tempDisable.indexOf(column)

        tempActive.push(column)
        tempDisable.splice(index, 1)
        this.setState({
            activeColumn: tempActive.map(item => item),
            disableColumn: tempDisable.map(item => item)
        })
    }
    onTitleSettingChangeEvent = (event) => {
        return this.setState({titleSetting: event.target.value})
    }
    onSubmitSettingEvent = () => {
        this.props.changeSettingDatatableAction(this.state.activeColumn, this.state.titleSetting, this.props.data.id)

        return this.setState({mode: 'display'})
    }
    onRemoveEvent = () => {
        return this.props.removeWidgetAction(this.props.data.id)
    }
    render() {
        if (this.state.mode === 'display') {
            return <DatatableWidgetView data = {this.props.data}
                                        contact = {this.props.contact}
                                        stock = {this.props.stock}
                                        settingClick = {this.settingClickEvent}
                                        dashboardMode = {this.props.dashboardMode}
                                        dataSource = {this.state.dataSource}
                                        onRemove = {this.onRemoveEvent}
            />
        }

            return <SettingDatatableWidgetView cancelClick = {this.cancelClickEvent}
                                               data = {this.props.data}
                                               activeColumn = {this.state.activeColumn}
                                               disableColumn = {this.state.disableColumn}
                                               changeFromActive = {this.changeFromActiveEvent}
                                               changeToActive = {this.changeToActiveEvent}
                                               dataSource = {this.state.dataSource}
                                               onTitleSettingChange = {this.onTitleSettingChangeEvent}
                                               onSubmitSetting = {this.onSubmitSettingEvent}
            />
    }
}

import React from 'react'
import {DatatableWidgetView} from './datatableWidget.view'
import {connect} from 'react-redux'
import {SettingWidget} from '../settingWidget/settingWidget.component'

@connect(state => ({contact: state.contacts}))
export class DatatableWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'display'
        }
    }
    settingClickEvent = (event) => {
        event.preventDefault()

        return this.setState({mode: 'setting'})
    }
    cancelClickEvent = (event) => {
        event.preventDefault()

        return this.setState({mode: 'display'})
    }
    render() {
        if (this.state.mode === 'display')
        {
            return <DatatableWidgetView data = {this.props.data} contact = {this.props.contact} settingClick = {this.settingClickEvent} dashboardMode = {this.props.dashboardMode}/>
        }

        return <SettingWidget cancelClick = {this.cancelClickEvent} data = {this.props.data}/>
    }
}

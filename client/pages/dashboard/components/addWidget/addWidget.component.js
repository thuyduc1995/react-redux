import React from 'react'
import {AddWidgetView} from './addWidget.view'
import {SettingWidget} from '../settingWidget/settingWidget.component'

export class AddWidget extends React.Component {
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
            return <AddWidgetView settingClick={this.settingClickEvent} dashboardMode = {this.props.dashboardMode}/>
        }

            return <SettingWidget cancelClick = {this.cancelClickEvent} data = {this.props.data}/>
    }
}

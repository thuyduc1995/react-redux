import React from 'react'
import {SettingWidgetView} from './settingWidget.view'
import {connect} from 'react-redux'


@connect(state => ({dashboard: state.dashboards}))
export class SettingWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            targetType: 'default'
        }
    }
    changeDropdown = (event) => {
        return this.setState({ targetType: event.target.value })
    }

    render() {
        return <SettingWidgetView changeDropdown={this.changeDropdown} typeWidget = {this.state.targetType}/>
    }
}

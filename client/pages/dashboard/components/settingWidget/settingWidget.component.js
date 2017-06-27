import React from 'react'
import {SettingWidgetView} from './settingWidget.view'
import {connect} from 'react-redux'

export class SettingWidget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            targetType: this.props.data.widgetType
        }
    }
    changeDropdown = (event) => {
        return this.setState({ targetType: event.target.value })
    }

    render() {
        return <SettingWidgetView changeDropdown={this.changeDropdown} typeWidget = {this.state.targetType} cancelClick = {this.props.cancelClick} data = {this.props.data}/>
    }
}

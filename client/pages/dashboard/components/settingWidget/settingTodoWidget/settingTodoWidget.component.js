import React from 'react'
import {SettingTodoWidgetView} from './settingTodoWidget.view'


export class SettingTodoWidget extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <SettingTodoWidgetView cancelClick = {this.props.cancelClick} data = {this.props.data}/>
    }
}

import React from 'react'
import {SettingOrgchartWidgetView} from './settingOrgchartWidget.view'


export class SettingOrgchartWidget extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <SettingOrgchartWidgetView cancelClick = {this.props.cancelClick} data = {this.props.data}/>
    }
}

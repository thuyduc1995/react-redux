import React from 'react'

import {OrgchartWidgetView} from './orgchartWidget.view'
import {SettingOrgchartWidget} from '../settingWidget/settingOrgchartWidget/settingOrgchartWidget.component'

export class OrgchartWidget extends React.Component {
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
            return <OrgchartWidgetView data = {this.props.data} settingClick = {this.settingClickEvent} dashboardMode = {this.props.dashboardMode}/>
        }

            return <SettingOrgchartWidget cancelClick = {this.cancelClickEvent} data = {this.props.data}/>
    }
}

